"use client";

import Image from "next/image";
import { Headset } from "lucide-react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabse/supabaseConfig";
import emailjs from "@emailjs/browser";

interface IStudent {
  id: string;
  name: string;
  email: string;
  phone: string;
  phone_verified: boolean;
}

export default function CounselorCTA() {
  const [student, setStudent] = useState<IStudent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStudent = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("Student")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        toast.error("Student not found");
        console.error(error.message);
      } else {
        setStudent(data);
      }

      setLoading(false);
    };

    getStudent();
  }, []);

  
  const sendMessage = async () => {
    if (!student) {
      toast.error("User not found");
      return;
    }

    const templateParams = {
      name: student.name,
      email: student.email,
      phone: student.phone,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  if (loading) return null;

  return (
    <div
      className="max-w-5xl mt-6 relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm"
      style={{ backgroundImage: "url('/images/Student/bg-2.png')" }}
    >
    
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 p-4 sm:p-6">
  
        <div className="max-w-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Got questions? We are always here for you!
          </h3>

          <p className="text-gray-600 mt-2">
            Our counselor will get back to you shortly.
          </p>

          <button
            onClick={sendMessage}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-blue-50 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-100 transition"
          >
            <Headset size={18} />
            Connect to Counsellor
          </button>
        </div>

  
        <div className="relative w-48 h-40 sm:w-56 sm:h-56 shrink-0">
          <Image
            src="/images/Student/Counsell.svg"
            alt="Student Counselor"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
