import { notFound } from "next/navigation";
import Banner from "@/components/course/Banner";
import Hero from "@/components/course/Hero";
import Enquiry from "@/components/course/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/course/Module";
import CertificationBanner from "@/components/Home/CertificationBanner";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";
import Testimonials from "@/components/course/TestimonialsSection";
import CourseContent from "@/components/course/CourseContent";
import Faq from "@/components/course/CourseFAQ";
import { supabase } from "@/lib/supabse/supabaseConfig";
import Mentors from "@/components/Home/Mentors";



export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
) {

    const { slug } = await params;

    const { data } = await supabase
        .from("Courses")
        .select("*")
        .eq("slug", slug)
        .single();

    return {
        title: data?.meta?.title ?? "Course Image",
        description: data?.meta?.description ?? "",
    };


}

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

const getCourseData = async (slug: string) => {

    const { data, error } = await supabase.from("Courses").select("*").eq("slug", slug).single();

    if (error) {

        console.log("There is some error occurred in the Course Page : ");
        console.log(error);

    };

    return data;

}


export default async function OnlineCourse({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params

    console.log("THE PARAMETERS IS : ", slug);

    const { data: course, error } = await supabase
        .from("Courses")
        .select("id, slug")
        .eq("slug", slug)
        .maybeSingle();


    if (!course || error) {

        notFound();

    }

    const courseData: Course = await getCourseData(slug)

    return (

        <div className="max-w-[83vw] mx-auto">

            <Hero courseData={courseData} />
            <Banner courseData={courseData} />
            <Module courseData={courseData} />
            <Mentors />
            <Testimonials courseData={courseData} />
            <TopCompanies />
            <Faq courseData={courseData} />
            
        </div>



    );
}