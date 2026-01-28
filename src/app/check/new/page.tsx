"use client"
import { supabase } from '@/lib/supabse/supabaseConfig'
import { title } from 'process'
import React, { useState } from 'react'

type Module = {
    id: string
    moduleName: string,
    videos: {
        id: string,
        title: string,
        video: string
    }[]
}

const New = () => {

    const [modules, setModules] = useState<Module[]>([]);

    console.log(modules);

    const handleAddModule = async () => {

        for (let module of modules) {

            if (module.moduleName == "") {
                alert("You have not filled Previous Modules correctly : ");
                return;
            }

            if (module.videos.length == 0) {
                alert("Filled the Video for the modules also: ");
                return;
            }

        }


        for (let module of modules) {

            for (let video of module.videos) {

                if (video.title == "") {

                    alert("Currently you have not filled all the videos and modules correctly please filled it and after that you are able to create new module: ")

                    return

                }

            }
        }

        setModules((prev) => {

            return [...prev, { id: crypto.randomUUID(), moduleName: "", videos: [] }];

        });

    }

    const handleRemove = async (id: string) => {

        setModules((prevModule) => {
            return prevModule.filter((module) => module.id !== id)
        });

    }

    const handleUpdateModuleName = async (moduleId: string, value: string) => {

        setModules((prev) => {
            return prev.map((module) => {
                return module.id == moduleId ? {
                    ...module,
                    moduleName: value
                } : module
            })
        })

    }

    const handleAddVideo = async (moduleId: string) => {

        setModules((prev) => {
            return prev.map((module) => {
                return module.id == moduleId ? {
                    ...module,
                    videos: [
                        ...module.videos,
                        {
                            id: crypto.randomUUID(),
                            title: "",
                            video: ""
                        }
                    ]

                } : module
            })
        })

    }

    const handleRemoveVideo = async (moduleId: string, videoId: string) => {
        setModules((prev) => {
            return prev.map((module) => {
                return module.id == moduleId ? {
                    ...module,
                    videos: module.videos.filter((video) => video.id !== videoId)
                } : module
            })
        })
    }

    const handleVideoTitleUpdate = async (moduleId: string, videoId: string, value: string) => {
        setModules((prev) => {
            return prev.map((module) => {
                return module.id == moduleId ? {
                    ...module,
                    videos: module.videos.map((video) => {
                        return video.id == videoId ? {
                            ...video,
                            title: value
                        } : video
                    })
                } : module
            })
        })
    }



    const handleVideoUpload = async (moduleId: string, videoId: string, file: File) => {

        if (!file) {
            return;
        };

        const fileName = `${Date.now()}-${file.name}`;

        const { data, error } = await supabase.storage.from("VideoBucket").upload(fileName, file, { upsert: true });


        if (error) {
            console.log(error);
        } else {
            console.log(data);
        };

        const { data: publicUrlData } = await supabase.storage.from("VideoBucket").getPublicUrl(fileName);

        console.log(publicUrlData)
        console.log(publicUrlData.publicUrl);

        setModules((prev) => {
            return prev.map((module) => {
                return module.id == moduleId ? {
                    ...module,
                    videos: module.videos.map((video) => {
                        return video.id == videoId ? {
                            ...video,
                            video: publicUrlData.publicUrl
                        } : video
                    })
                } : module
            })
        })
    }

    return (
        <div className='p-5 flex flex-col'>

            {
                modules.map((module) => {

                    return <div key={module.id} className='max-w-4xl mt-5 mb-3 w-full gap-10 border p-5 rounded-2xl'>

                        <div className='max-w-4xl flex gap-5'>

                            <input
                                type='text'
                                value={module.moduleName}
                                onChange={(e) => handleUpdateModuleName(module.id, e.target.value)}
                                placeholder='module Name'
                                className='w-full py-2 border rounded-xl px-2'
                            />

                            <button onClick={(e) => handleRemove(module.id)} className='px-5 py-2 bg-blue-700 cursor-pointer rounded-3xl text-white gap-5'>Delete</button>

                        </div>

                        {module.videos.map((video) => {
                            return <div key={video.id} className='max-w-5xl flex border p-3 gap-5 w-full mt-5 mb-5 rounded-2xl'>

                                <div className='flex flex-col w-full'>
                                    <label>Video title</label>
                                   
                                    <input
                                        type='text'
                                        value={video.title}
                                        onChange={(e) => { handleVideoTitleUpdate(module.id, video.id, e.target.value) }}
                                        placeholder='Video Title'
                                        className='w-full py-1 border rounded-xl px-2'

                                    />
                                    
                                </div>

                                <div className='flex flex-col w-full'>
                                    <label htmlFor='videoUpload' className=" border-2 border-dashed border-blue-500 rounded-lg bg-[#87b3fb] px-4 py-3 cursor-pointer text-center w-ful">Video upload</label>
                                    <input
                                        type='file'
                                        id='videoUpload'
                                        onChange={(e) => { e.target.files && handleVideoUpload(module.id, video.id, e.target.files[0]) }}
                                        placeholder='Video Title'
                                        className='hidden'

                                    />
                                    {video.video.slice(0, 20)}...
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button onClick={(e) => handleRemoveVideo(module.id, video.id)} className='px-5 py-2 bg-blue-700 cursor-pointer rounded-3xl text-white gap-5 hover:bg-[#060662]'>Delete</button>
                                </div>
                            </div>
                        })}

                        <button onClick={() => handleAddVideo(module.id)} className='px-5 py-2 bg-blue-700 cursor-pointer rounded-3xl text-white gap-5 mt-5 hover:bg-[#060664]'>Add Video</button>

                    </div>

                })
            }

            <button onClick={handleAddModule} className='w-[15vw] px-10 py-5 bg-blue-700 cursor-pointer rounded-4xl text-white hover:bg-[#04045e]'>
                Add Video Module
            </button>
        </div>
    )
}

export default New