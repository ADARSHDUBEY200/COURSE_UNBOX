import React from 'react'

const TextArea = ({ label }: { label: string }) => {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-slate-600">{label}</label>
            <textarea className="w-full rounded-lg border px-4 py-2 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
    );
}

export default TextArea