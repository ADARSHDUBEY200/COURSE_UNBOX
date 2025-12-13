"use client";

import React from "react";
import Link from "next/link";

const Enquiry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-500 text-white">

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ready for a Career <span className="text-yellow-300">Change?</span>
          </h2>
          <p className="mt-6 text-lg text-white/90">
            A professional UI built using Next.js, TypeScript, and Tailwind CSS — no external UI libraries.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="rounded-3xl bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition cursor-pointer">
              Home
            </button>
            <button className="rounded-3xl border border-white/40 px-6 py-3 hover:bg-white/10 transition cursor-pointer">
              About Us
            </button>
          </div>
        </div>



        <div className="bg-white text-black rounded-3xl shadow-2xl hover:shadow-4xl hover:shadow-indigo-400 cursor-pointer transition p-8">
          <h3 className="text-3xl font-bold mb-8 text-[#030358]">Reach To Us</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
              id="first"
              type="text"
              placeholder="First Name"
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Enter you Phone Number"
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 py-3 text-white font-bold hover:bg-blue-700 transition cursor-pointer"
            >
              Let's Connect
            </button>
          </form>
        </div>
      </section>


      <section id="features" className="bg-white text-black py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-4xl font-bold text-center text-[#090952] mb-12">Why choose this course?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Pure Next.js + TypeScript",
              "Tailwind CSS Only",
              "Clean & Scalable UI",
              "Pure Next.js + TypeScrip",
              "Tailwind CSS Onl",
              "Clean & Scalable U"
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border-2 border-[#121283] p-6 shadow-sm hover:shadow-2xl transition cursor-pointer"
              >
                <h4 className="text-xl font-semibold">{item}</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Designed with best practices for real-world production projects.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

export default Enquiry
