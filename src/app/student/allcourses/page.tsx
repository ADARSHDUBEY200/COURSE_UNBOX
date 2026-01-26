"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import Link from "next/link";

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

export default function AllCourses() {
    const [activeTab, setActiveTab] = useState("All");
    const [courses, setCourses] = useState<Course[] | []>();

    const tabs = [

        { label: "All", value: "All" },
        { label: "Digital Marketing", value: "Digital Marketing" },
        { label: "IT & Software", value: "IT & Software" },
        { label: "Data Science", value: "Data Science" },
        { label: "Developement", value: "Developement" },

    ];

    const getOnlineCourseData = async () => {

        const { data, error } = await supabase.from("Courses").select("*").eq("Delivery_Mode", "Online");

        if (error) {
            console.log("THERE IS SOME OF THE ERROR IN THE Student Dashboard All Courses : ");
            console.log(error);
        }

        setCourses(data ?? []);
    }

    useEffect(() => {
        getOnlineCourseData();
    })

    const filteredCourses =
        activeTab === "All"
            ? courses
            : courses?.filter((course) => course.domain === activeTab);

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Choose Your Path
                </h2>

                <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
                    Filter
                </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`px-4 py-2 rounded-full border text-sm transition cursor-pointer ${activeTab === tab.value
                            ? "border-orange-500 text-orange-500 bg-orange-50"
                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCourses?.map((course) => (
                    <div
                        key={course.id}
                        className="rounded-xl border bg-white shadow-sm hover:shadow-md transition"
                    >
                        <div className="relative h-40 w-full">
                            <Link href={`/student/course/${course.slug}`}>
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="rounded-t-xl object-cover"
                                />
                            </Link>
                        </div>

                        <div className="p-4">
                            <Link href={`/student/course/${course.slug}`}>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    {course.title}
                                </h3>
                            </Link>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Clock size={14} />
                                    {course.Duration}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Users size={14} />
                                    300
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
