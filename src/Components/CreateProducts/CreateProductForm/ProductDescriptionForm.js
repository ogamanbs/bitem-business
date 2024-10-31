import React from 'react'

export default function ProductDescriptionForm({setDescription}) {
    return (
        <div className="h-full w-full flex flex-wrap flex-col md:flex-row gap-3 md:gap-5 mt-3 md:mt-5">
            <textarea
                type="text"
                name="description"
                placeholder={"description"}
                autoComplete={"off"}
                rows={4}
                onChange={e=>setDescription(e.target.value)}
                className="w-full md:w-4/5 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent resize-none"
            />
        </div>
    );
}
