"use client";

import { useState } from "react";
import { Lock, ChevronRight } from "lucide-react";

const TABS = [
    "Data Science Foundations",
    "Python",
    "Statistics",
    "EDA",
    "Machine Learning",
    "SQL",
    "MLOps",
];

const CURRICULUM: Record<string, any[]> = {
    "Data Science Foundations": [
        {
            module: "Module 1",
            title: "What is Data Science?",
            lectures: [
                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples",
            ],
        },
        {
            module: "Module 2",
            title: "Future of Data Science",
            lectures: [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future",
            ],
        },
    ],


    "Python": [
        {
            module: "Module 1",
            title: "What is Data Science?",
            lectures: [
                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples",
            ],
        },
        {
            module: "Module 2",
            title: "Future of Data Science",
            lectures: [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future",
            ],
        },
    ],

    "Statistics": [
        {
            module: "Module 1",
            title: "What is Data Science?",
            lectures: [
                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples",
            ],
        },
        {
            module: "Module 2",
            title: "Future of Data Science",
            lectures: [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future",
            ],
        },
    ],

    "EDA": [
        {
            module: "Module 1",
            title: "What is Data Science?",
            lectures: [
                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples",
            ],
        },
        {
            module: "Module 2",
            title: "Future of Data Science",
            lectures: [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future",
            ],
        },
    ],

    "Machine Learning": [
        {
            module: "Module 1",
            title: "What is Data Science?",
            lectures: [
                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples",
            ],
        },
        {
            module: "Module 2",
            title: "Future of Data Science",
            lectures: [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future",
            ],
        },
    ],

    "SQL": [
        {
            module: "Module 1",
            title: "What is Data Science?",
            lectures: [
                "Lecture 1 : What is DS?",
                "Lecture 2 : Why DS Matters",
                "Lecture 3 : DS Roles (DS, ML Engineer, AI Engineer)",
                "Lecture 4 : Tools used in DS",
                "Lecture 5 : Industry examples",
            ],
        },
        {
            module: "Module 2",
            title: "Future of Data Science",
            lectures: [
                "Lecture 1 : DS Career Growth",
                "Lecture 2 : AI & Data Trends",
                "Lecture 3 : Skills for Future",
            ],
        },
    ],



};

export default function Module() {
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const [activeModule, setActiveModule] = useState(0);

    const modules = CURRICULUM[activeTab] || [];

    return (
        <section className="p-10 bg-[#f5fafd]">
            <div className="w-full p-6">

                {/* Heading */}

                <h2 className="text-3xl font-bold mb-6 text-black">
                    Your Guide To Upskilling: Our Curriculum
                </h2>

                {/* Tabs */}

                <div className="flex gap-3 mb-8 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setActiveModule(0);
                            }}
                            className={`px-20 py-6 text-black shrink-0 rounded-4xl text-sm font-medium transition cursor-pointer 
              ${activeTab === tab
                                    ? "bg-[#030363] text-white"
                                    : "bg-[white] hover:bg-gray-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-black rounded-lg p-4">
                    {/* Left Modules */}

                    <div className="md:col-span-1 border-r pr-4">
                        {modules.map((mod, index) => (
                            <button
                                key={mod.title}
                                onClick={() => setActiveModule(index)}
                                className={`w-full text-left p-4 mb-2 rounded-md flex justify-between items-center transition cursor-pointer
                ${activeModule === index
                                        ? "bg-[#040455] border-l-4 border-[#02025a]"
                                        : "hover:bg-[#020286]"
                                    }`}
                            >
                                <div>
                                    <p className="text-xs text-gray-500">{mod.module}</p>
                                    <p className="font-medium text-white">{mod.title}</p>
                                </div>
                                <ChevronRight className="text-gray-400" />
                            </button>
                        ))}
                    </div>

                    {/* Right Lectures */}
                    <div className="md:col-span-2">
                        {modules[activeModule]?.lectures.map((lecture: string) => (
                            <div
                                key={lecture}
                                className="flex items-center justify-between p-4 border rounded-md mb-3"
                            >
                                <p className="text-sm text-black">{lecture}</p>
                                <Lock className="w-4 h-4 text-[#a1a112]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
