import express from "express";
import connectDB from "../DB/index.js"; 
const app = express();

app.listen(8000, () => {
    console.log('App is listening on port 8000');
});

connectDB(); 

























//"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
