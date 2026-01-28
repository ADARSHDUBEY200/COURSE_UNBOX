"use client";

import { supabase } from "@/lib/supabse/supabaseConfig";
import { useRouter } from "next/navigation";


type Course = {

    id: string;
    title: string;
    description: string;
    startDate: string;
    Duration: number;
    language: string;
    domain: string;
    Delivery_Mode: string;
    low: number,
    high: number,
    price: number,
    content: {
        title: string;
        subtitle: string;
    }[];
    Testimonials:
    {
        name: string,
        role: string,
        company: string,
        title: string,
        description: string,
        ranking: string,
        course: string
    }[],
    modules: {
        [categoryName: string]: {
            module: string;
            title: string;
            lectures: string[];
        }[];
    }[];

    FAQ: {
        question: string;
        answer: string
    }[];

    meta: {
        title: string,
        description: string
    },

    slug: string,

    alt: string,

    image: string;

}

export default function BuyButton({ courseData }: { courseData: Course }) {

    const router = useRouter();

    const handleBuy = async () => {

        const { data } = await supabase.auth.getUser();

        if (data.user == null) {
            router.push("/login");
            return;
        }

        console.log(data);
        console.log("THE PRICE OF THE COURSE IS : ");
        console.log(courseData.price);

        const res = await fetch("http://localhost:3000/api/razorpay/create-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: courseData.price * 100, // in paise
                courseId: courseData.id
            })
        });

        console.log(res);

        const order = await res.json();

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID , // Replace with your Razorpay key_id
            amount: order.amount, // Amount is in currency subunits.
            currency: 'INR',
            name: 'Course Unbox',
            description: courseData.title,
            image : "/images/Home/CourseUnboxLogo.webp",
            order_id: order.id, // This is the order_id created in the backend
            callback_url: 'http://localhost:3000/student/courses', // Your success URL
            prefill: {
                name: "Gaurav Kumar",
                email: 'gaurav.kumar@example.com',
                contact: '9999999999'
            },

            theme: {
                color: '#050568'
            },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();

    };

    return (
        <button
            onClick={handleBuy}
            className="flex items-center justify-center gap-2 bg-[#e6ba2b] text-white px-12 py-4 rounded-full mt-5 cursor-pointer hover:bg-[#070739] transition "
        >
            Buy Now Start your Learning
        </button>
    );
}
