"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PopUpForm from "./PopUpForm";

export default function AllCoursesCTA() {
  const [isOpen , setIsOpen] = useState(false);


  return (
    <>
    <PopUpForm isOpen={isOpen} onCancel={()=>setIsOpen(false)} onConfirm={()=>setIsOpen(false)}/>
    <section className="relative my-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-800 to-indigo-900" />

      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl lg:max-w-2xl">
          {/* Heading */}
          <h2 className="
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-extrabold 
            leading-tight
          ">
            From Learning{" "}
            <br className="hidden sm:block" />
            <span className="text-yellow-300">
              to Real Careers
            </span>
          </h2>

          {/* Description */}
          <p className="
            mt-4 
            sm:mt-5 
            text-sm 
            sm:text-base 
            md:text-lg 
            text-blue-100 
            leading-relaxed
          ">
            Whether you’re starting with Digital Marketing or exploring other
            in-demand fields, our programs are designed to take you from
            fundamentals to job-ready skills with clarity and confidence.
          </p>

          {/* Career Path */}
          <div className="
            mt-6 
            sm:mt-8 
            flex 
            flex-wrap 
            items-center 
            gap-x-3 
            gap-y-3 
            text-xs 
            sm:text-sm 
            md:text-base
          ">
            {["Learn Skills", "Build Projects", "Grow Your Career"].map(
              (step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur border border-white/10">
                    {step}
                  </span>
                  {i !== 2 && (
                    <span className="text-yellow-300 hidden sm:inline">→</span>
                  )}
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <div className="
            mt-8 
            sm:mt-10 
            flex 
            flex-col 
            sm:flex-row 
            gap-3 
            sm:gap-4
          ">
            <button
              className="
                w-full 
                sm:w-auto 
                text-center 
                rounded-full 
                bg-yellow-400 
                text-blue-900 
                px-6 
                sm:px-8 
                py-3 
                font-semibold 
                shadow-xl 
                hover:bg-yellow-300 
                hover:scale-[1.03]
                transition
                cursor-pointer
              "
              onClick={()=>setIsOpen(true)}
            >
              Start Your Journey
            </button>

            <Link
              href="/about"
              className="
                w-full 
                sm:w-auto 
                text-center 
                rounded-full 
                border 
                border-white/40 
                px-6 
                sm:px-8 
                py-3 
                font-semibold 
                text-white 
                hover:bg-white/10 
                transition
              "
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center lg:justify-end">
          <div className="relative w-62 md:w-96 h-50 md:h-96">
            <Image
              src="/images/Course/CTA.webp"
              alt="Career focused learning"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
