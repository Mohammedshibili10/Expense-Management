import mongoose from "mongoose";

const grocerylistschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,    
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    icon:{  
        type:String,
        required:true
    },
    checked:{
        type:Boolean,
        default:false
    },
    checkedAt: {
  type: Date,
  default: null,
  expires: 7200, // 2 hours
}

})
export const  Grocery = mongoose.models.Grocery || mongoose.model("Grocery", grocerylistschema)