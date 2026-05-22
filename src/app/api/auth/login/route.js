import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "../../../../../lib/db.js"
import { User } from "../../../../../models/User.js"
import { generateToken } from "../../../../../lib/auth"

export async function POST(req){
    try {
       const  {email,password}=await req.json()
       if(!email || !password){
        return NextResponse.json({"message":"All fields are required"},{status:400})
       }
       await connectDB()
       const user=await User.findOne({email})
       if(!user){
        return NextResponse.json({"message":"Invalid credentials"},{status:400})
       }
        const isMatch=await bcrypt.compare(password,user.password)
            if(!isMatch){
                return NextResponse.json({"message":"Incorrect password"},{status:400})
            }
           const token =await generateToken(user)
            return NextResponse.json({
                "message":"Login successful", 
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    accountType: user.accountType
                }
            },{status:200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "An error occurred during login" }, { status: 500 })
    }
}