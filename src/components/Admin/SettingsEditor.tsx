import React from 'react'
import Card from './Card';
import Input from './Input';
import TextArea from './TextArea';

const SettingsEditor = () => {
    return (
        <Card title="Website Settings">
            <Input label="Site Name" />
            <Input label="Primary Color" placeholder="#2563eb" />
            <button className="mt-6 px-6 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium">
                Save Settings
            </button>
        </Card>
    );
}

export default SettingsEditor