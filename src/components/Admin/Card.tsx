import React from 'react'

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-100 cursor-pointer border-2 border-[#0931f8] p-6 transition">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            {children}
        </div>
    );
}

export default Card