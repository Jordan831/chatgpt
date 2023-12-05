import jwt from "jsonwebtoken";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
const Auth = function (req, res, next) {
const token = req.headers?.['x-vikram-token'];
if(token)
{
jwt.verify(token, `${process.env.JWT}`, async function(err, decoded) {
if(err) {

if(err.name == "JsonWebTokenError")
{
res.json({
"success":false,
"redirect":true,
"error":"Invalid Token"
})
}
else
{
res.json({
"success":false,
"redirect":true,
"error":"Invalid Token"
})    
}

}
if(decoded)
{
const user = await prisma.user.findUnique({where:{
email: decoded.user.email
}});

if(user.status)
{    
req.user = user;
next()

}
else
{
res.json({
"success":false,
"redirect":true,
"error":"Invalid Token"
})  
}
}
});

}
else
{
res.json({
"success":false,
"redirect":true,
"error":"Invalid Token"
}) 
}
}

export {Auth}