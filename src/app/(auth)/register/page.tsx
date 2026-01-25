"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthSideBanner from "@/components/Auth/AuthSideBanner";
import React, { useState } from "react";
import { supabase } from "@/lib/supabse/supabaseConfig";


type formType = {
   name : string;
   email : string;
   password : string;
   confirmPassword : string;
}


export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<formType>({ name:"", email:"", password:"", confirmPassword:""});
   const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setForm((prev)=>({...prev , [name] : value}))
  }


    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }
    if(form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    setLoading(true);

    

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options : {
         data : {
            name : form.name
         },
         emailRedirectTo: `${window.location.origin}/verifyemail`,
      }
    });

     setLoading(false);

   if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);

    // const user = data.user;

    // // If email confirmation is enabled
    // if (!user) {
    //   alert("Please verify your email to continue.");
    //   setLoading(false);
    //   router.replace("/login");
    //   return;
    // }

    // const { error: profileError } = await supabase
    //   .from("Student")
    //   .insert({
    //     id: user.id,
    //     name: form.name,
    //     email: form.email,
    //   });

    // if (profileError) {
    //   alert("Profile creation failed");
    //   setLoading(false);
    //   return;
    // }

    // setLoading(false);
    // router.replace("/student");
  };
  
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gray-50 relative">
      
      {/* ================ LEFT : FORM ================ */}
     
      <div className="flex items-center justify-center px-6 py-12 cursor-pointer">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            

            {/* LOGO / TITLE */}
            <h1 className="text-2xl font-bold text-gray-900">
            Create Student Account
            </h1>
            <p className="text-sm text-gray-500 mt-1">
            Join the dashboard and start learning 🚀
            </p>

          {/* GOOGLE LOGIN */}
          <button
            className="w-full mt-6 cursor-pointer flex items-center justify-center gap-4 border rounded-lg py-3 text-sm font-medium hover:bg-gray-50 transition"
          > 
            <img src="/images/About/GoogleIcon.webp" alt="Google Icon" className="size-7" />
            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-px bg-gray-200 flex-1"></span>
            <span className="text-xs text-gray-400">OR</span>
            <span className="h-px bg-gray-200 flex-1"></span>
          </div>

          {/* REGISTER FORM */}
          {success ? (
          <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm text-green-700">
            Please check your email to verify your account.
          </div>
        ) :
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

           
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
              {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-900 cursor-pointer text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
}

          {/* FOOTER */}
          <p className="text-sm text-gray-500 mt-6 text-center cursor-pointer">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

     {/* ================= RIGHT : COURSE IMAGE ================= */}
      <AuthSideBanner/>

    </div>
  );
}
