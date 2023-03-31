import express from "express";
import { register,login ,upload,checkAuth,checkUploadingStatus} from "../controllers/user.js";
import { Auth } from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.post("/upload",Auth,upload)
userRouter.get("/checkauth",Auth,checkAuth)
userRouter.get("/status",Auth,checkUploadingStatus)

export {userRouter};