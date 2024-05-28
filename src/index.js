import express from "express";
import dotenv from "dotenv"
import {app} from './app.js'
import connectDB from "../DB/index.js"; 

dotenv.config({
    path: './.env'
})

connectDB(); 
app.listen(process.env.PORT, () => {
    console.log(`App is listening on port http://localhost:${process.env.PORT}`);
});

connectDB(); 

























//"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
