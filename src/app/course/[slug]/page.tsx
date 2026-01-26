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


export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {

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

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",

    "name": courseData.title,
    "description": courseData.meta.description,

    "provider": {
      "@type": "Organization",
      "name": "Course Unbox",
      "url": "https://courseunbox.com"
    },

    "url": `https://courseunbox.com/course/${courseData.slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://courseunbox.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://courseunbox.com/course"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": courseData.title
      }
    ]
  };


  const faqSchema =
    courseData.FAQ?.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": courseData.FAQ.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
      : null;




  return (

    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [courseSchema, breadcrumbSchema, faqSchema].filter(Boolean)
          )
        }}
      />


      <Navbar />
      <div className="w-full min-h-screen text-white">
        <Hero courseData={courseData} />
        <Banner courseData={courseData} />
        <Enquiry courseData={courseData} />
        <Module courseData={courseData} />
        <CourseContent courseData={courseData} />
        <Mentors />
        <Testimonials courseData={courseData} />
        <CertificationBanner />
        <TopCompanies />
        <Faq courseData={courseData} />
        <LetsConnect />
      </div>
      <Footer />

    </>
  );
}