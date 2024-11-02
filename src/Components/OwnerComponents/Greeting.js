import React from 'react'

export default function Greeting({name}) {
    return (
        <div className="flex flex-col mb-10 gap-1 mt-5 px-5">
            <div className="text-3xl flex gap-3">
                <h1 className="">Hi,</h1>
                <h1 className="capitalize">{name.split(' ')[0]}</h1>
            </div>
            <div className="text-2xl">Welcome to Bitem Business</div>
        </div>
    );
}
