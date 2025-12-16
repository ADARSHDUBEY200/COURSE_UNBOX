import React, { useState } from 'react'
import Card from "@/components/Admin/Card"
import { supabase } from '@/lib/supabse/supabaseConfig';

const Banner = ({ collapsed }: { collapsed: boolean }) => {
    const [formData, setFormData] = useState({
        firstTitle: "",
        firstNumber: "",
        secondTitle: "",
        secondNumber: "",
        thirdTitle: "",
        thirdNumber: "",
        fourthTitle: "",
        fourthNumber: ""
    });

    const [loading, setLoading] = useState(false);


    const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
        });
    }

    const handleData = async () => {

        setLoading(true);

        const { data, error } = await supabase.from("Home").insert([{ section: "Banner", content: formData }]).select().single();

        console.log(data);


        if (error) {
            console.log("THERE IS SOME ERROR : ", error);
        }

        if (data) {

            setLoading(false);

        };


    }


    return (
        <div className={`${collapsed ? "w-[85vw]" : "w-[75vw]"} mx-auto mt-10 px-4`}>

            <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">

                <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <input name='firstTitle' placeholder="Learn Anytime, Anywhere" value={formData.firstTitle} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <input name='firstNumber' placeholder="Upgrade your skills" value={formData.firstNumber} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />



                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <input name='secondTitle' placeholder="Learn Anytime, Anywhere" value={formData.secondTitle} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <input name='secondNumber' placeholder="Upgrade your skills" value={formData.secondNumber} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />



                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <input name='thirdTitle' placeholder="Learn Anytime, Anywhere" value={formData.thirdTitle} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <input name='thirdNumber' placeholder="Upgrade your skills" value={formData.thirdNumber} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />



                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <input name='fourthTitle' placeholder='upgrade' value={formData.fourthTitle} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <input name='fourthNumber' placeholder='upgrade' value={formData.fourthNumber} onChange={handleFormData} className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />


                    </div>

                    <button className="mt-6 px-10 py-4 rounded-3xl bg-blue-600 text-white text-sm font-medium cursor-pointer hover:bg-[#117fdf] hover:text-[black] transition" onClick={handleData}>

                        {loading ? "...Loading" : "Update"}

                    </button>

                </div>
            </div>
        </div>
    )
}

export default Banner



