
import { NextResponse } from "next/server"
import { User } from "../../../../models/User"
import { authenticate } from "../../../../lib/auth"

export async function GET(req){
    try {
        const decode= authenticate(req)
        const user= await User.findById(decode.userId).select("name  accountType")
        return NextResponse.json({message:"finded data" ,user})

    } catch (error) {
          console.log(error)
         return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
       
    }
}