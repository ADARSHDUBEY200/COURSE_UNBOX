import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Course Unbox",
  description:
    "Read Course Unbox Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function page() {
  return (
    <>
    <Navbar/>
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Heading */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: <span className="font-medium">[Add Date]</span>
        </p>
      </header>

      {/* Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed text-base">
        
        <p>
          At <span className="font-medium text-slate-900">Course Unbox</span>, we
          respect your privacy and are committed to protecting the personal
          information you share with us. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our
          website or use our services.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and details submitted through enquiry or registration
              forms.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on pages,
              browser type, device information, and general website usage data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to enquiries and provide requested services</li>
            <li>Share course information and updates</li>
            <li>Improve website performance and user experience</li>
            <li>Send promotional or informational communication (with consent)</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> sell, rent, or trade your personal
            information to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            3. Cookies and Tracking
          </h2>
          <p>
            We may use cookies and similar technologies to enhance your browsing
            experience, analyze traffic, and improve our services. You can
            disable cookies through your browser settings, but some features may
            not function correctly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            4. Data Security
          </h2>
          <p>
            We take reasonable technical and organizational measures to protect
            your personal data from unauthorized access, loss, or misuse.
            However, no internet transmission is completely secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            5. Third-Party Services
          </h2>
          <p>
            Our website may use third-party tools such as analytics or payment
            services. These services have their own privacy policies, and we
            encourage you to review them separately.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            6. Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for communication at any time</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            7. Children’s Privacy
          </h2>
          <p>
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> support@courseunbox.com <br />
            <strong>Website:</strong> www.courseunbox.com
          </p>
        </div>

      </section>
    </main>
    <Footer/>
    </>
  );
}
