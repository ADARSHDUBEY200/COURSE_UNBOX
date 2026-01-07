import React from "react";

const testimonials = [
  {
    name: "Aman Sharma",
    role: "Digital Marketing Executive",
    image: "/images/testimonials/aman.jpg",
    review:
      "Course Unbox gave me real exposure to tools and live projects. I gained confidence, cracked interviews, and started my career within weeks.",
  },
  {
    name: "Priya Verma",
    role: "MBA Student",
    image: "/images/testimonials/priya.jpg",
    review:
      "What I loved most was the practical approach. Course Unbox helped me stand out during college placements with real skills, not theory.",
  },
  {
    name: "Rohit Singh",
    role: "Freelance Marketer",
    image: "/images/testimonials/rohit.jpg",
    review:
      "This institute focuses on execution. I started freelancing while learning and landed my first paid client during the course itself.",
  },
];

export default function StudentTestimonials() {
  return (
    <section className="relative py-24 h-1/2 overflow-hidden  px-24  bg-blue-100 ">
      
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 " />

      {/* Soft Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96  rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96  rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 lg:py-12 srounded-xl ">
        
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold ">
            Real Stories. Real Careers.
          </h2>
          <p className="mt-4 text-blue-700 text-base sm:text-lg">
            Hear from Course Unbox students who built job-ready skills and
            transformed their careers with practical learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/95
                backdrop-blur-xl
                rounded-3xl
                p-8 lg:p-10
                shadow-2xl
                hover:-translate-y-3
                hover:shadow-blue-900/40
                transition-all duration-500
                cursor-pointer
              "
            >
              {/* Profile */}
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 lg:w-18 lg:h-18 rounded-full object-cover border-4 border-blue-600"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-sm font-medium text-blue-700">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="text-slate-700 text-base leading-relaxed">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
