import { NextResponse } from "next/server"
import { Grocery } from "../../../../../../models/homeModel/Grocerylist"
import { connectDB } from "../../../../../../lib/db"

export async function PUT(request, { params }) {

    try {
        const { checked } = await request.json()
        const { id } = await params
        await connectDB()
        const grocery = await Grocery.findByIdAndUpdate(id, { checked, checkedAt:checked ? new Date() : null }, { returnDocument: 'after' })
        
        return NextResponse.json({  success: true, data: grocery }, { status: 200 })


    } catch (error) {
        return NextResponse.json({ message: error.message || "Server error" }, { status: 500 })
    }
}

export async function GET() {
  await connectDB();

  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);

  const groceries = await Grocery.find({
    $or: [
      { checked: false },
      { checked: true, checkedAt: { $gt: twoHoursAgo } },
    ],
  });

  return NextResponse.json({
    success: true,
    data: groceries,
  });
}