import MyCourses from "@/components/Student/MyCourses";
import CounselorCTA from "@/components/Student/CounselorCTA";
import { supabase } from "@/lib/supabse/supabaseConfig";



export default async function CoursesPage() {

  return (<section>
    <h2 className="font-bold text-3xl sm:text-4xl text-[#025378] mb-8">
      My Courses
    </h2>
    <MyCourses />
    <CounselorCTA />
  </section>
  )
}
