import mongoose from "mongoose";

const budgetschema = new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    category:{
        type:String,
        required:true
    },
    limit:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    alerts:{
        type:Boolean,
        required:true
    }
})
export const Budget = mongoose.models.Budget || mongoose.model("Budget", budgetschema)