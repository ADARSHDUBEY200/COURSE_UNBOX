import React from 'react'
import Card from './Card';
import Input from './Input';
import TextArea from './TextArea';

const CourseEditor = () => {
    return (
        <Card title="Courses Management">
            <Input label="Course Name" />
            <Input label="Category" />
            <TextArea label="Course Description" />
            <button className="mt-6 px-6 py-2 rounded-lg bg-green-600 text-white text-sm font-medium">
                Add Course
            </button>
        </Card>
    );
}

export default CourseEditor