"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });
    console.log("d",error)

    setLoading(false);

    if (!error) {
      alert("Password updated successfully!");
      router.replace("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 bg-linear-to-br from-blue-800 via-blue-900 to-blue-950">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border">
        <h1 className="text-2xl font-bold text-gray-900">
          Reset password
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Enter your new password below.
        </p>

        <form onSubmit={handleReset} className="mt-6 space-y-4">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-white cursor-pointer font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}
