import type { Metadata } from "next";
import Navbar from "@/components/Home/Navbar"
import Footer from "@/components/Home/Footer"
import AboutCourseUnbox from "@/components/About/AboutCourseUnbox";
import PartnerTrustSection from "@/components/About/PartnerTrustSection";
import FounderSection from "@/components/About/FounderSection";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import PlacementAssistance from "@/components/About/PlacementAssistance";
import FinalMasterclassForm from "@/components/About/FinalMasterclassForm";


export const metadata: Metadata = {
    title: "About Course Unbox",
    description: "Discover who we are, what we do, and why Course Unbox exists to empower learners.",

};



export default function AboutPage() {

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",

        "name": "About Course Unbox",
        "description":
            "Learn about Course Unbox, our mission, founders, industry partnerships, and how we empower learners with career-focused education.",

        "url": "https://courseunbox.com/about",

        "inLanguage": "en-IN",

        "isPartOf": {
            "@type": "WebSite",
            "name": "Course Unbox",
            "url": "https://courseunbox.com"
        },

        "about": {
            "@type": "Organization",
            "name": "Course Unbox"
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",

        "name": "Course Unbox",
        "url": "https://courseunbox.com",

        "logo": "https://courseunbox.com/logo.png",

        "description":
            "Course Unbox is a career-focused education platform offering digital marketing, technology, and AI-driven training programs with placement support.",

        "founder": {
            "@type": "Person",
            "name": "Jugal Chauhan",
            "jobTitle": "Founder & Mentor",
            "sameAs": [
                "https://www.linkedin.com/in/jugal-chauhan"
            ]
        },

        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },

        "sameAs": [
            "https://www.instagram.com/courseunbox",
            "https://www.linkedin.com/company/course-unbox",
            "https://www.youtube.com/@courseunbox"
        ]
    };


    return (
        <>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        aboutPageSchema,
                        organizationSchema
                    ])
                }}
            />

            <Navbar />
            <div className="w-full bg-white ">

                {/* STATS SECTION */}
                <AboutCourseUnbox />

                {/* Parterner Trus Section */}
                <PartnerTrustSection />

                {/* Founder Section */}
                <FounderSection />


                {/* Why Choose Us */}
                <WhyChooseUs />


                {/* Placement Assistance Section */}
                <PlacementAssistance />


                {/* Final Form */}
                <FinalMasterclassForm />


                {/* TEAM SECTION */}


            </div>


            <Footer />

        </>
    );
}
