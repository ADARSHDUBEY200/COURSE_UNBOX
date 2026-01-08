import Image from "next/image";
import React from "react";

const GetCertifiedByAmazon = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1c336e] to-[#3d5ba9]">
      
      {/* White Trust Card */}
      <div className="w-full mx-auto bg-white rounded-t-full px-6 md:px-12 py-3 text-center shadow-xl">
        
        {/* Label */}
        <p className="text-sm uppercase tracking-wider text-[#03033f] ">
          Industry Certification
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Certified by <span className="text-yellow-500">Amazon & Flipkart</span> for Trusted Learning
        </h2>

        {/* Logos */}
        <div className="flex items-center justify-center gap-10 md:gap-16">
          <img
            src="https://www.freelogovectors.net/wp-content/uploads/2023/10/flipkart-logo-freelogovectors.net_.png"
            alt="Flipkart Certification"
            className="h-8 md:h-25 object-contain transition"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Certification"
            className="h-8 md:h-10 object-contain transition"
          />
        </div>

      </div>
    </section>
  );
};

export default GetCertifiedByAmazon;
