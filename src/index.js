import express from "express";
import dotenv from "dotenv"
import {app} from './app.js'
import {registerUser} from "../controllers/user.controller.js"

dotenv.config({
    path: './env'
})
import connectDB from "../DB/index.js"; 
const server = express();

server.listen(process.env.PORT, () => {
    console.log(`App is listening on port http://localhost:${process.env.PORT}`);
});

connectDB(); 

























//"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
