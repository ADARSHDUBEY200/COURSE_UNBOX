"use client"

import Image from "next/image";
import { useState } from "react";

type Course = {
    id: number;
    title: string;
    category: string;
    image: string;
};

type Props = {
    courses: Course[];
};

const categories = ["All Courses", "Digital Marketing", "Development", "IT & Software", "Data Science"];

const Courses = ({ courses }: Props) => {

    const [activeCategory, setActiveCategory] = useState("All Courses");

    const filteredCourses =

        activeCategory === "All Courses"
            ? courses
            : courses.filter((c) => c.category === activeCategory);

    return (
        <section className="w-full pt-20 py-16 bg-[#e9f5ff]">
            <h2 className="text-center font-extrabold text-5xl text-[#14399f]">
                     Our Courses
                </h2>
            <div className="w-7xl mx-auto px-6 text-center">

                <p className="text-gray-500 mt-2 mb-8 text-2xl">
                    Explore a wide range of courses where learning is fun, easy, and absolutely free!
                </p>

               
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-15 py-6 rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? "bg-[#1C336E] text-white font-bold border-[#1C336E]"
                                    : "border-[#1C336E] text-[#1C336E] font-bold hover:bg-[#cac2f7]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="flex flex-wrap justify-center gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="h-[50vh] w-[20vw] border-2 border-[#2e19a7] rounded-2xl flex flex-col shadow-xl gap-20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={400}
                                height={400}
                                className="rounded-tr-xl rounded-tl-xl h-[30vh]"
                            />
                            <p className="mt-4 text-lg font-bold text-[#213c98]">
                                {course.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Courses