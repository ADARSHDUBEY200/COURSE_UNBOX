import React from 'react'

 const Input = ({ label, placeholder }: { label: string; placeholder?: string }) => {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-slate-600">{label}</label>
            <input
                placeholder={placeholder}
                className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default Input