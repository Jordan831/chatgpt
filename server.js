import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import os from 'os';
import next from "next";
import { userRouter } from "./routers/user.js";
import dotenv from "dotenv";
dotenv.config();
const dev = process.env.NODE_ENV !== 'production'
const client = next({ dev })
const handle = client.getRequestHandler();
client.prepare().then(() => {
const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileUpload({
useTempFiles : true,
tempFileDir : os.tmpdir()
}));
app.use("/api",userRouter);
app.use((err, req, res, next) => {
if (res.headersSent) {
return next(err) 
}   
console.log(err)
if(err.code == "P2002")
{
var msg = `Unique constraint failed on the  ${err.meta.target.join(",")} `;
}
else
{
var msg = "Invalid Data";
}
res.json({'error': msg })
});
app.get('*', (req, res) => {
return handle(req, res)
})
app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`);
})
});