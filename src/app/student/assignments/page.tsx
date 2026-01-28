"use client";

import { useEffect, useState } from "react";

export default function Assignments() {
  const launchDate = new Date("2026-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = launchDate - now;

    if (diff <= 0) return null;

    return {
      Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((diff / (1000 * 60)) % 60),
      Seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.08)] p-10 text-center">

        {/* Background glow */}
        <div className="absolute -top-32 -left-32 h-96 w-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-pink-200/40 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Brand */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              CourseUnbox
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            We’re launching something
            <span className="font-semibold text-indigo-600"> beautiful</span>,
            <span className="font-semibold text-pink-600"> powerful</span>, and
            <span className="font-semibold text-purple-600"> practical</span>.
          </p>

          {/* Countdown */}
          {timeLeft && (
            <div className="mt-10 grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([label, value], i) => (
                <div
                  key={label}
                  className={`rounded-2xl bg-white shadow-lg py-4 border-t-4 ${i === 0
                      ? "border-indigo-500"
                      : i === 1
                        ? "border-purple-500"
                        : i === 2
                          ? "border-pink-500"
                          : "border-blue-500"
                    }`}
                >
                  <div className="text-3xl font-bold text-gray-900">
                    {value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Notify */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">
              Get early access & launch updates
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <button
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-6 py-3 font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                Notify Me 🚀
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-gray-400">
            © {new Date().getFullYear()} CourseUnbox. Crafted with ❤️
          </p>
        </div>
      </div>
    </div>

  );
}
