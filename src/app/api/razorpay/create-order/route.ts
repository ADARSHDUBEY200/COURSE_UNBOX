import { razorpay } from "@/lib/razorpay/razorpay";
import { NextResponse } from "next/server";



export async function POST(req: Request) {

    try {
        const { amount, courseId } = await req.json();

        const order = await razorpay.orders.create({
            amount,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        });

        return NextResponse.json(order);

    } catch (error) {


        console.error("THERE IS SOME ERROR", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }

}