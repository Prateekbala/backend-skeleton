import express from "express"
import userRouter from '../routes/index.js'
import {registerUser} from "../controllers/user.controller.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.static("public"))

app.use("/api/v1/users", userRouter)

export {app}