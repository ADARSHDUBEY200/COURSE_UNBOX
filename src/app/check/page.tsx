"use client"

import { supabase } from "@/lib/supabse/supabaseConfig"
import { useState } from "react"


// 🔹 Types
type Video = {
  id: string
  title: string
  videoUrl: string
  uploading: boolean
}

type Module = {
  id: string
  moduleName: string
  videos: Video[]
}

export default function AdminCoursePage() {
  const [modules, setModules] = useState<Module[]>([])
  const [saving, setSaving] = useState(false)

  /* ================= MODULE HANDLERS ================= */

  const addModule = () => {
    setModules(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        moduleName: "",
        videos: []
      }
    ])
  }

  const removeModule = (moduleId: string) => {
    setModules(prev => prev.filter(m => m.id !== moduleId))
  }

  const updateModuleName = (moduleId: string, value: string) => {
    setModules(prev =>
      prev.map(m =>
        m.id === moduleId ? { ...m, moduleName: value } : m
      )
    )
  }

  /* ================= VIDEO HANDLERS ================= */

  const addVideo = (moduleId: string) => {
    setModules(prev =>
      prev.map(m =>
        m.id === moduleId
          ? {
              ...m,
              videos: [
                ...m.videos,
                {
                  id: crypto.randomUUID(),
                  title: "",
                  videoUrl: "",
                  uploading: false
                }
              ]
            }
          : m
      )
    )
  }

  const removeVideo = (moduleId: string, videoId: string) => {
    setModules(prev =>
      prev.map(m =>
        m.id === moduleId
          ? {
              ...m,
              videos: m.videos.filter(v => v.id !== videoId)
            }
          : m
      )
    )
  }

  const updateVideoTitle = (
    moduleId: string,
    videoId: string,
    value: string
  ) => {
    setModules(prev =>
      prev.map(m =>
        m.id === moduleId
          ? {
              ...m,
              videos: m.videos.map(v =>
                v.id === videoId ? { ...v, title: value } : v
              )
            }
          : m
      )
    )
  }

  /* ================= VIDEO UPLOAD ================= */

  const uploadVideo = async (
    moduleId: string,
    videoId: string,
    file: File
  ) => {
    setModules(prev =>
      prev.map(m =>
        m.id === moduleId
          ? {
              ...m,
              videos: m.videos.map(v =>
                v.id === videoId ? { ...v, uploading: true } : v
              )
            }
          : m
      )
    )

    const path = `courses/${moduleId}/${videoId}-${file.name}`

    const { error } = await supabase.storage
      .from("course-videos")
      .upload(path, file)

    if (error) {
      alert("Upload failed")
      return
    }

    const { data } = supabase.storage
      .from("course-videos")
      .getPublicUrl(path)

    setModules(prev =>
      prev.map(m =>
        m.id === moduleId
          ? {
              ...m,
              videos: m.videos.map(v =>
                v.id === videoId
                  ? {
                      ...v,
                      videoUrl: data.publicUrl,
                      uploading: false
                    }
                  : v
              )
            }
          : m
      )
    )
  }

  /* ================= BUILD FINAL JSON ================= */

  const buildFinalJSON = () => {
    return modules.map(module => ({
      [module.moduleName]: module.videos.map(video => ({
        title: video.title,
        video: video.videoUrl
      }))
    }))
  }
 
  /* ================= SAVE COURSE ================= */

  const saveCourse = async () => {
    if (!validate()) {
      alert("Please complete all modules and videos")
      return
    }

    setSaving(true)

    const finalJson = buildFinalJSON()

    console.log("FINAL JSON 👉", finalJson)

    // 🔹 Send to backend here
    // await saveCourseAction(finalJson)

    setSaving(false)
    alert("Course saved! Check console for JSON")
  }

  const validate = () => {
    return modules.every(
      m =>
        m.moduleName.trim() !== "" &&
        m.videos.length > 0 &&
        m.videos.every(v => v.title && v.videoUrl)
    )
  }

  /* ================= UI ================= */

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Course Builder</h1>

      {modules.map((module, moduleIndex) => (
        <div
          key={module.id}
          className="border rounded-lg p-4 space-y-4"
        >
          <div className="flex gap-2">
            <input
              placeholder="Module Name"
              value={module.moduleName}
              onChange={e =>
                updateModuleName(module.id, e.target.value)
              }
              className="border p-2 flex-1 rounded"
            />
            <button
              onClick={() => removeModule(module.id)}
              className="bg-red-500 text-white px-3 rounded"
            >
              Delete
            </button>
          </div>

          {module.videos.map((video, videoIndex) => (
            <div
              key={video.id}
              className="border p-3 rounded space-y-2"
            >
              <input
                placeholder="Video Title"
                value={video.title}
                onChange={e =>
                  updateVideoTitle(
                    module.id,
                    video.id,
                    e.target.value
                  )
                }
                className="border p-2 w-full rounded"
              />

              <input
                type="file"
                accept="video/*"
                onChange={e =>
                  e.target.files &&
                  uploadVideo(
                    module.id,
                    video.id,
                    e.target.files[0]
                  )
                }
              />

              {video.uploading && (
                <p className="text-sm text-blue-500">
                  Uploading...
                </p>
              )}

              {video.videoUrl && (
                <p className="text-sm text-green-600">
                  Uploaded ✓
                </p>
              )}

              <button
                onClick={() =>
                  removeVideo(module.id, video.id)
                }
                className="bg-red-400 text-white px-2 py-1 rounded"
              >
                Remove Video
              </button>
            </div>
          ))}

          <button
            onClick={() => addVideo(module.id)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            + Add Video
          </button>
        </div>
      ))}

      <button
        onClick={addModule}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        + Add Module
      </button>

      <button
        onClick={saveCourse}
        disabled={saving}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {saving ? "Saving..." : "Save Course"}
      </button>
    </div>
  )
}
