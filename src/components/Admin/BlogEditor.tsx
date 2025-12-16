import React from 'react'
import Card from './Card';
import Input from './Input';
import TextArea from './TextArea';

function BlogEditor() {
    return (
        <Card title="Create Blog Post">
            <Input label="Blog Title" />
            <Input label="Slug" />
            <TextArea label="Content" />
            <button className="mt-6 px-6 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium">
                Publish Blog
            </button>
        </Card>
    );
}

export default BlogEditor