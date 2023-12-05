import asyncHandler from "express-async-handler";
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import csv from "csv-parser";
import fs from "fs";
import Queue from "better-queue";
import { Configuration, OpenAIApi } from "openai";
import Shopify from "shopify-api-node";
import parse from "pg-connection-string"; 
import MemoryStore from 'better-queue-memory'
var parseConnection = parse.parse;
var config = parseConnection(process.env.DATABASE_URL);

const prisma = new PrismaClient();
const configuration = new Configuration({
organization: `${process.env.OPEN_AI_ORGANIZATION_ID}`,
apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
var q = new Queue(async function (input, cb) {

try
{
if(input.Title)
{

const shopify = new Shopify({
shopName: input.user.shop,
accessToken: input.user.token
});
const heading=[];
const values=[];
var tableheading='';
var tablevalue='';
if(input.Tags)
{
var list=input.Tags;

var rows='';
let t = list.split(",");
t.map((p)=>{
if( p.indexOf('Artform_') !=-1 || p.indexOf('Color_') !=-1 || p.indexOf('Craftmenship_') !=-1 || p.indexOf('Fabric_') !=-1 || p.indexOf('Available Size_') !=-1 )
{
let value= p.split("_");
heading.push(value[0]);
values.push(value[1]);
rows+=`<tr><td>${value[0]}</td><td>${value[1]}</td></tr>`
}
});

var table = `<table><caption>Specification </caption>${rows}</table>`;
tableheading = heading.length > 1 ? heading.join(",") : heading[0];
tablevalue = values.length > 1 ? values.join(",") : values[0];
}

const suggested_title = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
max_tokens: 2000,
temperature: 0.2,
messages: [
{role: "user", 
content: `write seo title  for ${input.Title.trim()} 50 characters only and add seo keyword at beginning `}]
});

if(suggested_title?.data?.choices[0]?.message?.content)
{
const completion = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
max_tokens: 3500,
temperature: 0.2,
messages: [
{
role: "user", 
content: `Write 200 characters seo  description  for "${input.Title.trim()}"`}]
});

const query = `{
productByHandle(handle: "${input.Handle}") {
legacyResourceId
}
}
`;
await shopify.graphql(query).then( async(product) => 
{
if(product.productByHandle)
{
console.log("enter")
console.log(suggested_title?.data?.choices[0]?.message);
console.log(suggested_title?.data?.choices[0]?.message?.content)
const p = await shopify.product.update(product.productByHandle.legacyResourceId,{

"metafields_global_description_tag": completion?.data?.choices[0]?.message?.content.replace(/"/g,""),
"metafields_global_title_tag": suggested_title?.data?.choices[0]?.message?.content.replace(/"/g,"")

});

}
}

).catch((err) => console.error(err));
}
}
}
catch(err){
console.log(err?.response)
}  
cb(); 
},{
maxRetries:3,
afterProcessDelay:9000,
retryDelay: 4000,
store: {
type: 'sql', 
dialect: 'postgres', 
host: config.host,  
port: config.port,
username: config.user,
password: config.password,
dbname: config.database, 
tableName: 'tasks'
}
});


const register = asyncHandler(async(req,res)=>{
const {email,password,shop,token} = req.body;

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

const user = await prisma.User.create({
data: {
email: email,
password: hash,
shop:shop,
token:token
},  
})

if(user)
{
res.json({
"success":true,
"user":user
})
}

});

const login = asyncHandler(async(req,res)=>{
const {email,password} = req.body;
const user = await prisma.user.findUnique({where:{
email:email
}});

if(user?.status === true)
{
if(bcrypt.compareSync(password, user.password) )
{
let token = jwt.sign({ user: user }, `${process.env.JWT}`);
res.json({
"success":true,
"token":token
})
}
else
{
res.json({
"success":false,
"error":"Invalid Login"
})
}
}
else
{
res.json({
"success":false,
"error":"Invalid Login"
})
}

});

const upload = asyncHandler(async(req,res)=>{

const filename =  req.files.csv.tempFilePath;
const supported_file=['text/csv']; 
if(supported_file.includes(req.files.csv.mimetype))
{

fs.createReadStream(filename).pipe(csv()).on('data', (data) =>{

if(data.Handle && data.Title !="" )
{
data['user']=req.user;
q.push(data)
}
});
res.json({
"success":true,
"file":req.files
})
}
else
{
res.json({
"success":false,
"error":"Invalid File"
})    
}
});
const checkAuth= asyncHandler(async(req,res)=>{
console.log("auth checking")
res.json({
"success":true
})   
});

const checkUploadingStatus = asyncHandler(async(req,res)=>{
const result = await prisma.$queryRaw`SELECT id FROM tasks ORDER BY added ASC `;
res.json({
"success":true,
"count":result.length
})

});
export {register,login,upload,checkAuth,checkUploadingStatus}
