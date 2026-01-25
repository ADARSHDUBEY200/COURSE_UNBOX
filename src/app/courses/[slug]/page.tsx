import { notFound } from "next/navigation";
import Banner from "@/components/courses/Banner";
import Hero from "@/components/courses/Hero";
import Enquiry from "@/components/courses/Enquiry";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Module from "@/components/courses/Module";
import CertificationBanner from "@/components/Home/CertificationBanner";
import TopCompanies from "@/components/Home/TopCompanies";
import LetsConnect from "@/components/Home/LetsConnect";
import Testimonials from "@/components/courses/TestimonialsSection";
import CourseContent from "@/components/courses/CourseContent";
import Faq from "@/components/courses/CourseFAQ";
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

const getPagesData = async (slug: string) => {

  const { data, error } = await supabase.from("Pages").select("*").eq("slug", slug).single();

  if (error) {

    console.log("There is some happen in the particular Pages page : ");
    console.log(error);

  }

  return data;
}


export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params

  console.log("THE PARAMETERS IS : ", slug);

  const { data: course, error } = await supabase
    .from("Pages")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();


  if (!course || error) {

    notFound();

  }

  const courseData = await getPagesData(slug);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",

    "name": courseData.title,
    "description": courseData.description,

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
    courseData.faqs?.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": courseData.faqs.map((faq: any) => ({
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
        <Hero courseSlug={slug} />
        <Banner courseSlug={slug} />
        <Enquiry courseSlug={slug} />
        <Module courseSlug={slug} />
        <CourseContent courseSlug={slug} />
        <Mentors />
        <Testimonials courseSlug={slug} />
        <CertificationBanner />
        <TopCompanies />
        <Faq courseSlug={slug} />
        <LetsConnect />
      </div>
      <Footer />

    </>
  );
}