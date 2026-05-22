import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "../../../../../lib/db.js"
import { User } from "../../../../../models/User.js"

export async function POST(request) {
    try {
        const { name, email, password, phoneNumber, accountType } = await request.json()
        if (!name || !email || !password || !phoneNumber || !accountType) {
            return new Response(JSON.stringify({ "message": "All fields are required" }), { status: 400 })
        }
        await connectDB()
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }
        if (!email.includes("@")) {
            return NextResponse.json({ message: "Invalid email" }, { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            accountType,
        })
        return NextResponse.json({
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                accountType: user.accountType,
            },
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "An error occurred while creating the user" }, { status: 500 })
    }
}