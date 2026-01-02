"use client";

import React, { useState } from "react";
import { ChevronDown} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight , Star } from "lucide-react";


const categories = [
  "Most Popular",
  "Top AI Courses",
  "IIT Madras Pravartak Certified",
  "Programming",
  "Business & Management",
  "Core Engineering",
  "Data Science",
  "Design",
  "Creative Arts",
  "Language",
  "Career Development",
  "Architecture",
  "Online courses अब हिंदी में",
];

const courses = [
  {
    title: "Microsoft Generative AI",
    desc: "Learn to use 15+ AI tools like Copilot, ChatGPT and more",
    duration: "6 weeks",
    rating: 4.8,
    badge: "Newly Launched",
  },
  {
    title: "Prompt Engineering for GenAI",
    desc: "Learn prompt writing for AI tools",
    duration: "6 weeks",
    rating: 4.8,
  },
  {
    title: "Generative AI",
    desc: "Build AI-based apps & chatbots",
    duration: "6 weeks",
    rating: 4.8,
  },
  {
    title: "Vibe Coding with Replit",
    desc: "Build apps & AI projects with Replit",
    duration: "4 weeks",
    rating: 4.6,
  },
  {
    title: "AI & Machine Learning",
    desc: "Build & deploy ML models fast",
    duration: "6 weeks",
    rating: 4.7,
  },
  {
    title: "AI in Digital Marketing",
    desc: "Leverage AI for marketing growth",
    duration: "6 weeks",
    rating: 4.5,
  },
];

const mobileSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};


 /* ---------- Custom Arrows ---------- */
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
    >
      ‹
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
    >
      ›
    </button>
  );
}



export default function AllCoursesPage() {
    
  const [selected , setSelected] = useState<number | null>(null);
  return (
    <section className="bg-[#f7fbff] min-h-screen">
      <div className="hidden max-w-7xl mx-auto px-6 py-16 lg:grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="lg:col-span ">
          <div className="sticky top-24 rounded-xl   p-6 bg-blue-50 shadow-xl">
            <h3 className="font-bold text-lg mb-6 ">Categories</h3>

            <ul className="space-y-6 text-sm">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`cursor-pointer px-4  border-l-4 transition flex items-center justify-between
                    ${
                      selected === i
                        ? "border-blue-600 text-gray-800 font-bold bg-blue-100 py-3"
                        : "border-transparent text-gray-700 hover:bg-blue-100 py-3 py-1"
                    }
                  `}
                >
                  {/* LEFT TEXT */}
                  <span>{cat}</span>

                  {/* RIGHT ICON */}
                  <ChevronRight
                    size={22}
                    className={`transition-opacity duration-300 ${
                      selected === i ? "opacity-100 text-gray-800 translate-x-0 " : "opacity-0 -translate-x-1"
                    }`}
                  />
                </li>

              ))}
            </ul>
          </div>
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <main className="lg:col-span-3">
          <h2 className="text-2xl text-gray-500 font-bold mb-8">
            Top AI Courses <span className="text-gray-500">(7)</span>
          </h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 shadow-xl p-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-blue-300 shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="h-36 bg-blue-50 flex items-center justify-center relative">
                  {course.badge && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}
                  <img className="w-full h-full object-contain" src="https://training-comp-uploads.internshala.com/homepage/media/courses_section/card_images/upgrad_course.png?v=1&v=v6" alt="mm" />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between shadow-lg gap-2 text-sm mb-2 px-3 py-2 rounded-xs bg-linear-to-br from-white via-amber-50 to-amber-100 ">
                    <div className="flex items-center gap-2 ">
                         <Star size={16} className="text-yellow-500 fill-yellow-500"/> <span className="font-medium">{course.rating}</span>
                    </div>
                      <p className="text-sm text-gray-500">
                       {course.duration}
                      </p>
                  </div>

                  <h3 className="font-semibold text-lg leading-snug mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {course.desc}
                  </p>

                 

                  <button className="text-blue-700 text-sm font-medium  flex items-center cursor-pointer">
                    <p>Know more</p> <ChevronRight className="mt-1" size={20}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

     {/* ================= MOBILE VIEW ================= */}
      <div className="block lg:hidden w-full px-4 py-12 space-y-4">
        <h1 className="text-3xl font-extrabold">Our Courses</h1>
        {categories.map((cat, index) => {
          const isOpen = selected === index;

          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setSelected(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4"
              >
                <span className="font-semibold text-gray-900">{cat}</span>
                <span
                  className={`h-8 w-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>

              {/* Slider */}
              {isOpen && (
                <div className="px-3 pb-6">
                  <Slider {...mobileSliderSettings}>
                    {courses.map((course, i) => (
                      <div key={i} className="px-2">
                        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                          {/* Image */}
                          <div className="h-36 bg-blue-50 flex items-center justify-center relative">
                            {course.badge && (
                              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                {course.badge}
                              </span>
                            )}
                            <span className="text-blue-600 font-semibold">
                              Course Image
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            <div className="flex items-center gap-2 text-sm mb-2">
                              ⭐ <span className="font-medium">{course.rating}</span>
                            </div>

                            <h3 className="font-semibold text-lg mb-2">
                              {course.title}
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                              {course.desc}
                            </p>

                            <p className="text-sm text-gray-500 mb-5">
                              {course.duration}
                            </p>

                            <button className="text-blue-600 text-sm font-medium">
                              Know more →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          );
        })}
      </div>

                          
  
    </section>
  );
}
