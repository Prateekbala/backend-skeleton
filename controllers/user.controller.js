import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"



// const GenerateRefreshToken(asyncHandler(req,res,next)=>{

// })







const registerUser=asyncHandler(async(req,res)=>{

const {fullName, username, email,password} = req.body

if([fullName, username, email,password].some((field)=>field?.trim()==""))
    {
    throw new ApiError(400,"All fields are required")
}

const UserExists=await User.findOne({
    $or:[{username},{email}]
})

if(UserExists){
    throw new ApiError(400,"User Already Exists")
}


let avatarLocalPath;
if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
     avatarLocalPath= req.files.avatar[0].path;
}



let coverImageLocalPath;
if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path
}

const avatarUrl=await uploadOnCloudinary(avatarLocalPath);
const coverImageUrl= await uploadOnCloudinary(coverImageLocalPath);

// if(!avatarUrl){
//     throw new ApiError(500,"Avatar cannot be uploaded at this point of time , please try later")
// }
// if(!coverImageUrl){
//     throw new ApiError(500,"coverImage cannot be uploaded at this point of time , please try later")
// }

const user = await User.create({
    fullName,
    avatar: avatarUrl?.url|| "",
    coverImage: coverImageUrl?.url || "",
    email, 
    password,
    username: username.toLowerCase()
})

const createdUser= await User.findOne(user._id).select("-password -refreshToken")

if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user")
}

return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered Successfully")
)

})

export {registerUser}