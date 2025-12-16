import React from 'react'
import Card from './Card';
import Input from './Input';
import TextArea from './TextArea';

const AboutEditor = () => {
    return (
        <Card title="About Page Content">
            <Input label="Heading" />
            <TextArea label="About Description" />
            <button className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                Save About Content
            </button>
        </Card>
    );
}

export default AboutEditor