import Hero from "@/components/AllCourses/Hero"
import CourseContainer from '@/components/AllCourses/CourseContainer'
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"
import AllCoursesFAQs from '@/components/AllCourses/AllCoursesFAQs'
import FinalCTA from "@/components/AllCourses/FinalCTA"
import CoursesOverview from "@/components/AllCourses/CourseOverview"
import AllCoursesCTA from "@/components/AllCourses/AllCoursesCTA"
import type { Metadata } from "next"
import WhyChooseUs from "@/components/AllCourses/WhyChooseUs"
import CertificationBanner from "@/components/AllCourses/CertificationBanner"
import StudentTestimonials from "@/components/AllCourses/Testimonial"

export const metadata: Metadata = {
    title: "All Courses | Digital Marketing, Tech & Career Programs – Course Unbox",
    description:
        "Explore all courses at Course Unbox, including digital marketing, technology, and career-focused programs. Learn practical skills and grow with industry-ready training.",
};


const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "All Courses",
    "description":
        "Explore all courses at Course Unbox including digital marketing, technology, and career-focused programs.",
    "url": "https://courseunbox.com/course"
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
        }
    ]
};


const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Who can attend this masterclass?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "This masterclass is suitable for students, working professionals, entrepreneurs, and anyone interested in learning AI and Digital Marketing, regardless of prior experience."
            }
        },
        {
            "@type": "Question",
            "name": "Is this masterclass really free?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the masterclass is completely free. There are no hidden charges or commitments."
            }
        },
        {
            "@type": "Question",
            "name": "Is Digital Marketing a good career option in Delhi NCR?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the masterclass is completely free. There are no hidden charges or commitments."
            }
        },
        {
            "@type": "Question",
            "name": "Will I get a recording if I miss the session?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, registered participants will receive access to the session recording after the masterclass."
            }
        },
        {
            "@type": "Question",
            "name": "How long is the masterclass?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, participants who attend the full session will receive a certificate of participation."
            }
        },
    ]
};

export default function page() {
    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([webPageSchema, breadcrumbSchema, faqSchema])
                }}
            />

            <Navbar />
            <Hero />
            <CourseContainer />
            <AllCoursesCTA />
            <CoursesOverview />
            <CertificationBanner />
            <StudentTestimonials />
            <WhyChooseUs />
            <AllCoursesFAQs />
            <FinalCTA />
            <Footer />

        </>
    )
}