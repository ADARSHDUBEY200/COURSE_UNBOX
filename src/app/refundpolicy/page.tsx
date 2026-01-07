import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

export const metadata = {
  title: "Refund Policy | Course Unbox",
  description:
    "Read Course Unbox Refund Policy to understand our rules regarding cancellations, refunds, and eligibility.",
};

export default function RefundPolicyPage() {
  return (
    <>
    <Navbar/>
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Heading */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Refund Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: <span className="font-medium">[Date]</span>
        </p>
      </header>

      {/* Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed text-base">
        
        <p>
          At <span className="font-medium text-slate-900">Course Unbox</span>, we
          strive to provide high-quality training and services. This Refund
          Policy explains the conditions under which refunds may be requested
          and processed.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            1. Eligibility for Refund
          </h2>
          <p>
            Refund requests are considered only under specific circumstances.
            To be eligible for a refund:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>The request must be submitted within the applicable refund period.</li>
            <li>The course or service must not be substantially completed.</li>
            <li>Access to course materials may be revoked once a refund is approved.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            2. Non-Refundable Items
          </h2>
          <p>
            The following are generally <strong>non-refundable</strong>:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Registration or admission fees</li>
            <li>Downloaded or fully accessed course materials</li>
            <li>Customized or one-on-one training services</li>
            <li>Services already delivered or completed</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            3. Refund Request Process
          </h2>
          <p>
            To request a refund, please contact us with the following details:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Your full name</li>
            <li>Registered email address</li>
            <li>Course or service name</li>
            <li>Reason for requesting a refund</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            4. Refund Approval
          </h2>
          <p>
            All refund requests are reviewed on a case-by-case basis. Approval
            or rejection of a refund is at the sole discretion of Course Unbox.
            We reserve the right to deny refund requests that do not meet our
            policy criteria.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            5. Refund Processing Time
          </h2>
          <p>
            If approved, refunds will be processed within <strong>7–10 working
            days</strong> using the original method of payment. Processing time
            may vary depending on your bank or payment provider.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            6. Changes to This Policy
          </h2>
          <p>
            Course Unbox reserves the right to update or modify this Refund
            Policy at any time. Any changes will be reflected on this page with
            an updated revision date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            7. Contact Us
          </h2>
          <p>
            If you have any questions regarding this Refund Policy or wish to
            request a refund, please contact us:
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
