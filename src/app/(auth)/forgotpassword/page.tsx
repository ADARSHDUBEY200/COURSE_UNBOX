"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabse/supabaseConfig";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/resetpassword`,
    });

    

    setLoading(false);

    if (!error) {
      setSent(true);
    }

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 bg-gray-50 px-4 bg-linear-to-br from-blue-800 via-blue-900 to-blue-950">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border">
        <h1 className="text-2xl font-bold text-gray-900">
          Forgot your password?
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Enter your email and we’ll send you a reset link.
        </p>

        {sent ? (
          <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700 text-sm">
             Password reset link sent.  
            Please check your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Sending link..." : "Send reset link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
