"use client"

import React, { useState } from 'react'
import Card from './Card';
import Input from './Input';
import TextArea from './TextArea';
import CourseCards from './CourseEditor/CourseCards';
import CourseTable from './CourseEditor/CourseTable';
import AddCourse from './CourseEditor/AddCourse';

const CourseEditor = ({collapsed} : {collapsed : boolean}) => {
    const [active, setActive] = useState("card");

    const handleCardView = () => {
        setActive("card");
    }

    const handleTableView = () => {
        setActive("Table")
    }

    const onEdit = () => {
        setActive("Edit")
    }

    const handleAdd = () => {
        setActive("Add");
    }
    return (
        <>

            <div>
                <div className='flex gap-4 w-full'>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleCardView}>Card</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleTableView}>Table</button>
                    <button className='py-4 px-10 bg-blue-600 rounded-4xl text-white font-bold cursor-pointer' onClick={handleAdd}>Add</button>
                </div>
            </div>

            {active === "card" && <CourseCards onEdit = {onEdit} />}
            {active === "Table" && <CourseTable onEdit = {onEdit} />}
            {active === "Add" && <AddCourse collapsed = {collapsed}/>}

        </>
    );
}

export default CourseEditor