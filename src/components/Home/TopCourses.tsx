import Image from 'next/image'
import React from 'react'

const TopCourses = () => {

    return (

        <div>
            <section className="w-full h-[93vh] bg-gradient-to-r from-[#f8f8fd] to-[#c9e1f1] py-12 px-8 md:px-20">
                <h2 className="text-5xl text-center font-extrabold mb-15 text-[#020274]">Top Courses</h2>

                <div className='flex gap-20'>
                    <div className="flex flex-col justify-between bg-white shadow-2xl h-[65vh] w-[27vw] rounded-3xl hover:scale-105 transition cursor-pointer">
                        <div className="relative h-[50%] w-full">
                            <Image
                                src="/images/Home/Course.jpg"
                                alt="courseImage"
                                fill
                                className="object-cover rounded-tr-2xl rounded-tl-2xl"
                            />
                        </div>

                        <div className='h-[34%] w-full bg-blue-50'>
                            Here is Content of the Course
                        </div>

                        <div className='flex justify-between'>
                            <button className='ml-3 mb-3 py-4 px-10 bg-[blue] rounded-4xl text-white font-bold'>Explore</button>
                            <button className='mr-3 mb-3 py-4 px-10 bg-[#060663] rounded-4xl text-white font-bold'>Reach To Us</button>
                        </div>
                    </div>

                    <div className="bg-white shadow-2xl  h-[65vh] w-[27vw] rounded-3xl hover:scale-105 transition  cursor-pointer">
                        <Image src="/images/Home/Course.jpg" width={400} height={300} alt='courseImage' className='rounded-tr-2xl rounded-tl-2xl' />
                    </div>

                    <div className="bg-white shadow-2xl  h-[65vh] w-[27vw] rounded-3xl hover:scale-105 transition  cursor-pointer">
                        <Image src="/images/Home/Course.jpg" width={400} height={300} alt='courseImage' className='rounded-tr-2xl rounded-tl-2xl' />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default TopCourses