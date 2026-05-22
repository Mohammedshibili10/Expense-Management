import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phoneNumber: {
        type:Number,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    accountType: {
        type:String,
        required:true
    }


},{timestamps:true}) 
export const User = mongoose.models.User || mongoose.model("User", userSchema)
