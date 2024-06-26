import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
dotenv.config()
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
const uploadOnCloudinary= async(localFilePath)=>{
    try{
        if(!localFilePath) return null

        const response =await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        //File uploaded Done
        //response contains a url
        fs.unlinkSync(localFilePath)
        return response;

    }
    catch(err){
        fs.unlinkSync(localFilePath) //Upload option failed
        return null;

    }
}

export {uploadOnCloudinary}