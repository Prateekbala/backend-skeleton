import {Schema} from "mongoose"
import mongoose from "mongoose"
const UserSchema=new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            
        },
        coverImage: {
            type: String, // cloudinary url
        },
     
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        },
        Amount:{
            type:Number

        }

    },
    {
        timestamps: true
    }
)
export const User=mongoose.model("User",UserSchema)