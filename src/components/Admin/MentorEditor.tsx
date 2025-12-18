"use client"

import React, { useState } from 'react'
import MentorTable from './Mentor/mentorTable';
import MentorCard from './Mentor/mentorCard';

const MentorEditor = () => {
    const [active, setActive] = useState("card");

    const handleCardView = () => {
        setActive("card");
    }

    const handleTableView = () => {
        setActive("Table")
    }
    return (
        <>

            <div>
                <div className='flex gap-4 w-full'>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleCardView}>Card</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleTableView}>Table</button>
                </div>
            </div>

            {active === "card" && <MentorCard/>}
            {active === "Table" && <MentorTable/>}

        </>
    );
}

export default MentorEditor