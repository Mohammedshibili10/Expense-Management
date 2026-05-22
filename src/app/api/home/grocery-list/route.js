import { NextResponse } from "next/server"
import { connectDB } from "../../../../../lib/db"
import { Grocery } from "../../../../../models/homeModel/Grocerylist"

export async function POST(request) {
    try {
        const { name, category, price, icon } = await request.json()
        if (!name || !category || !price || !icon) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 })
        }
        await connectDB()
        const grocery = await Grocery.create({
            name,
            category,
            price,
            icon
        })
        return NextResponse.json({ message: "Grocery item added successfully", success: true, data: grocery }, { status: 201 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error.message || "Server error" }, { status: 500 })
    }
}

export async function GET() {
    try {
        const groceries = await Grocery.find()
        if (groceries.length === 0) {
            return NextResponse.json({ message: "No grocery items found", success: true, data: [] }, { status: 200 })
        }
        return NextResponse.json({ message: "Grocery items found", success: true, data: groceries }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error.message || "Server error" }, { status: 500 })
    }
}

