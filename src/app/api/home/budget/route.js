import { NextResponse } from "next/server"
import { Budget } from "../../../../../models/homeModel/Budget"
import { connectDB } from "../../../../../lib/db"

export  async function POST  (request) {
    try{
        const {name, category, limit, currency, alerts} = await request.json()
        if(!name || !category || !limit || !currency){
            return NextResponse.json({message:"All fields are required"}, {status:400})
        }
         await connectDB()
        const budget = await Budget.create({
            name,
            category,
            limit,
            currency,
            alerts
        })
        
        return NextResponse.json({message:"Budget created successfully", 
            success:true,
            data: budget
        })
    } catch (error) {
        return NextResponse.json({message:error.message || "Server error"}, {status:500} )
    }
}

export async function GET () {
    try {
         await connectDB()
        const budget =await Budget.find()
        return NextResponse.json({message:"Budgets retrieved successfully", success:true, data:budget}, {status:200})
    } catch (error) {
        return NextResponse.json({message:error.message || "Server error"}, {status:500})
    }
}