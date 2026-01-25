"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import { useRouter } from "next/navigation";




export default function VerifyEmailPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkEmailVerification = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        setError("Session expired. Please log in again.");
        setLoading(false);
        return;
      }

      if (user.email_confirmed_at) {
        setVerified(true);

        await ensureStudentExists(user);
        setTimeout(() => {
          router.replace("/student");
        }, 1500);
      } else {
        setVerified(false);
      }

      setLoading(false);
    };

    checkEmailVerification();
  }, [router]);

  const ensureStudentExists = async(user:any)=>{
     const {data : existingStudent} = await supabase.from('Student').select("id")
    .eq("id", user.id)
    .single();

    if(existingStudent){
        
        return;
    }

    const {error} = await supabase.from('Student').insert({
        id: user.id,
        name: user.user_metadata?.name ?? "",
        email: user.email,
    });

     if (error) {
        throw new Error("Failed to create student profile");
    }
  }

  const resendVerification = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      setError("Unable to resend verification email.");
      return;
    }

    await supabase.auth.resend({
      type: "signup",
      email: user.email,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border text-center">
        {loading ? (
          <p className="text-gray-600">Checking verification status…</p>
        ) : error ? (
          <p className="text-red-600 text-sm">{error}</p>
        ) : verified ? (
          <>
            <h1 className="text-2xl font-bold text-gray-900">
              Email verified ✅
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Redirecting you to the next step…
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-900">
              Verify your email
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              We’ve sent a verification link to your email.  
              Please verify to continue.
            </p>

            <button
              onClick={resendVerification}
              className="mt-6 w-full rounded-lg border border-blue-600 text-blue-600 py-3 font-semibold hover:bg-blue-50 transition"
            >
              Resend verification email
            </button>
          </>
        )}
      </div>
    </div>
  );
}
