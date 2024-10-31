import React from 'react'

export default function ProductDetailsForm({setName, setPrice, setDiscount, setUnits}) {
    return (
        <div className="h-full w-full flex flex-wrap flex-col md:flex-row gap-3 md:gap-5">
            <input
                type="text"
                name="product-name"
                placeholder="product name"
                autoComplete="off"
                onChange={e=>setName(e.target.value)}
                className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="text"
                name="product-price"
                placeholder="product price"
                autoComplete="off"
                onChange={e=>setPrice(e.target.value)}
                className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="text"
                name="discount-price"
                placeholder="discount percentage"
                autoComplete="off"
                onChange={e=>{setDiscount(e.target.value)}}
                className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="number"
                name="units"
                placeholder="number of units"
                autoComplete="off"
                onChange={e=>{setUnits(e.target.value)}}
                className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
            />
        </div>
    );
}
