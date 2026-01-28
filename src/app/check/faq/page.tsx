export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {/* FAQ Item */}
        <details className="group rounded-xl border border-gray-200 p-5 transition-all duration-300 open:shadow-md">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-800">
            What is this platform about?
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This platform provides high-quality online courses designed to help
            developers master modern technologies through hands-on learning.
          </p>
        </details>

        {/* FAQ Item */}
        <details className="group rounded-xl border border-gray-200 p-5 transition-all duration-300 open:shadow-md">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-800">
            Are the courses beginner-friendly?
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Yes. Courses are structured from basic to advanced levels, making
            them suitable for beginners as well as experienced developers.
          </p>
        </details>

        {/* FAQ Item */}
        <details className="group rounded-xl border border-gray-200 p-5 transition-all duration-300 open:shadow-md">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-800">
            Do I get a certificate after completion?
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Yes, you will receive a verified certificate once you successfully
            complete the course and its assessments.
          </p>
        </details>

        {/* FAQ Item */}
        <details className="group rounded-xl border border-gray-200 p-5 transition-all duration-300 open:shadow-md">
          <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-800">
            Is there lifetime access?
            <span className="transition-transform duration-300 group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Absolutely. Once enrolled, you get lifetime access to the course
            content, including future updates.
          </p>
        </details>
      </div>
    </section>
  );
}
