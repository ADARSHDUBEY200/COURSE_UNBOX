"use client";
import Banner from "@/components/Home/Banner";
import Courses from "@/components/Home/Courses";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import TopCourses from "@/components/Home/TopCourses";
import Footer from "@/components/Home/Footer"
import Enquiry from "@/components/Home/Enquiry";
import Mentors from "@/components/Home/Mentors";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {

  // const courses = [
  //   { id: 1, title: "Web Development with MERN", category: "Development", image: "/images/Home/courseImage.webp" },
  //   { id: 2, title: "Python", category: "Development", image: "/images/Home/TopCourse.jpg" },
  //   { id: 3, title: "Data Science", category: "IT & Software", image: "/images/Home/courseImage.webp" },
  //   { id: 4, title: "Data Analytics", category: "Data Science", image: "/images/Home/TopCourse.jpg" },
  //   { id: 5, title: "Power BI", category: "Data Science", image: "/images/Home/courseImage.webp" },
  //   { id: 6, title: "UI/UX Design", category: "Digital Marketing", image: "/images/Home/TopCourse.jpg" },
  //   { id: 7, title: "Unity 3D", category: "Development", image: "/images/Home/courseImage.webp" },
  //   { id: 8, title: "React", category: "Development", image: "/images/Home/TopCourse.jpg" },
  // ];



  return (


    <main className="w-full min-h-screen bg-white">

      <Navbar />
      <Hero />
      <Banner />
      <Courses />
      <Enquiry />
      <TopCourses />
      <Mentors />
      <Testimonials />
      <Footer />

    </main>

  );
}
