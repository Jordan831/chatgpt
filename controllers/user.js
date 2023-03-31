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
const prisma = new PrismaClient();
const configuration = new Configuration({
organization: `${process.env.OPEN_AI_ORGANIZATION_ID}`,
apiKey: process.env.OPENAI_API_KEY,
});
const shopify = new Shopify({
shopName: `${process.env.SHOPNAME}`,
accessToken: `${process.env.API_TOKEN}`
});

const openai = new OpenAIApi(configuration);
var q = new Queue(async function (input, cb) {

try
{
if(input.Title && input.Type)
{
console.log(input.Title)
const heading=['Type'];
const values=[input.Type];
var tableheading='';
var tablevalue='';
if(input.Tags)
{
var list=input.Tags;
let t = list.split(",");
t.map((p)=>{
if(p.indexOf('Delivery_') !=-1 || p.indexOf('Artform_') !=-1 || p.indexOf('Color_') !=-1 || p.indexOf('Craftmenship_') !=-1 || p.indexOf('Fabric_') !=-1 || p.indexOf('Available Size_') !=-1 )
{
let value= p.split("_");
heading.push(value[0]);
values.push(value[1]);
}
});
tableheading = heading.length > 1 ? heading.join(",") : heading[0];
tablevalue = values.length > 1 ? values.join(",") : values[0];
}
const suggested_title = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
max_tokens: 4000,
temperature: 0.2,
messages: [
{role: "user", 
content: `Suggest 60 characters google search professional title for ${input.Title.trim()}`}]
});

if(suggested_title?.data?.choices[0]?.message?.content)
{
const completion = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
max_tokens: 4000,
temperature: 0.2,
messages: [
{role: "user", 
content: `Write html paragraph code Description for "${input.Title.trim()}" 200 words and add  5 benefits in html list code and create  Specification  table of two columns add ${tableheading} in first column and add   ${tablevalue} in second column
`}]
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
await shopify.product.update(product.productByHandle.legacyResourceId,{
'title':suggested_title?.data?.choices[0]?.message?.content.replace(/"/g,""),
'body_html':completion?.data?.choices[0]?.message?.content
});
}
}

).catch((err) => console.error(err));
}
}
}
catch(err){
console.log(err)
}
cb();
},{
maxRetries:3,
afterProcessDelay:3000,
store: {
type: 'sql',
dialect: 'postgres',
host: `${process.env.Q_HOST}`,
port: 5432,
username: `${process.env.Q_DB_USER}`,
password: `${process.env.Q_DB_PASSWORD}`,
dbname: `${process.env.Q_DB}`,
tableName: 'tasks',
ssl: {
    rejectUnauthorized : false
}
}
});

const register = asyncHandler(async(req,res)=>{
const {email,password} = req.body;
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
const user = await prisma.user.create({
data: {
email: email,
password: hash,
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
if(data.Handle && data.Title )
{
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
const result = await prisma.$queryRaw`SELECT id FROM public.tasks ORDER BY added ASC `;
res.json({
"success":true,
"count":result.length
})

});
export {register,login,upload,checkAuth,checkUploadingStatus}
