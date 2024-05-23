import express from "express"
import userRouter from '../routes/index.js'
import {registerUser} from "../controllers/user.controller.js"
const app = express()

app.use("/api/v1/users", userRouter)

export {app}