import React from 'react';

export default function PanelDetailForm({setBgcolor, setPanelColor, setTextColor}) {
    return (
        <div className="h-full w-full flex flex-col gap-5">
            <h1 className="">Product Details</h1>
            <div className="w-full text-sm flex flex-wrap gap-3 md:gap-5">
                <input
                    type="text"
                    name="background-color"
                    placeholder="background color"
                    autoComplete="off"
                    onChange={e=>setBgcolor(e.target.value)}
                    className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                    />
                <input
                    type="text"
                    name="panel-color"
                    placeholder="panel color"
                    autoComplete="off"
                    onChange={e=>setPanelColor(e.target.value)}
                    className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                />
                <input
                    type="text"
                    name="text-color"
                    placeholder="text color"
                    autoComplete="off"
                    onChange={e=>setTextColor(e.target.value)}
                    className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                />
            </div>
        </div>
    );
}
