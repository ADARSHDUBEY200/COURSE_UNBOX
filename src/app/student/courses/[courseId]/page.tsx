"use client";

import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabse/supabaseConfig";

type Lesson = {
  id: string;
  title: string;
  video: string;
};

type Module = {
  id: string;
  moduleName: string;
  videos: Lesson[];
};

export default function CourseWatchPage() {
  const params = useParams();
  const { courseId } = params as { courseId: string };

  const [course, setCourse] = useState<Module[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const getCourseData = async () => {
    const { data, error } = await supabase
      .from("Courses")
      .select("videoModule")
      .eq("id", courseId)
      .single();

    if (error) {
      console.error("Error fetching course:", error);
      return;
    }

    const modules = data.videoModule as Module[];
    setCourse(modules);

    // ✅ safely set first lesson
    if (modules.length && modules[0].videos.length) {
      setCurrentLesson(modules[0].videos[0]);
    }
  };

  useEffect(() => {
    if (courseId) {
      getCourseData();
    }
  }, [courseId]);

  if (!currentLesson) {
    return <p className="p-6">Loading course...</p>;
  }

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-4">
      {/* SIDEBAR */}
      <aside className="lg:col-span-1 border-r bg-white overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Course Content</h2>
        </div>

        <div className="p-4 space-y-5">
          {course.map((module) => (
            <div key={module.id}>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                {module.moduleName}
              </h3>

              <div className="space-y-1">
                {module.videos.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm
                      ${currentLesson.id === lesson.id
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    <PlayCircle className="w-4 h-4" />
                    {lesson.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN VIDEO AREA */}
      <main className="lg:col-span-3 bg-gray-50 p-6">
        <h1 className="text-xl font-semibold mb-4">
          {currentLesson.title}
        </h1>

        {/* video player goes here */}

        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
          <video
            key={currentLesson.id}
            src={currentLesson.video}
            controls         
            playsInline    // ✅ REQUIRED for mobile
            controlsList="nodownload"
            className="w-full h-full object-contain"
          />
        </div>
      </main>
    </div>
  );
}
