"use client";

import Banner from "@/components/course/Banner";
import Hero from "@/components/course/Hero";
import Enquiry from "@/components/course/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/course/Module";
import Mentors from "@/components/course/Mentors";

interface CoursePageProps {
    params: {
        slug: string;
    };
}

export default function CoursePage({ params }: CoursePageProps) {

    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen text-white">

                <Hero />
                <Banner />
                <Enquiry />
                <Module />
                <Mentors />


                <section className="max-w-7xl mx-auto px-6 py-16 text-white">
                    <h2 className="text-2xl font-bold">About Data Science With Generative AI Course</h2>
                    <p className="mt-3 text-gray-300">
                        (Write detailed content here…)
                    </p>
                </section>
            </div>

            <Footer />

        </>
    );
}
