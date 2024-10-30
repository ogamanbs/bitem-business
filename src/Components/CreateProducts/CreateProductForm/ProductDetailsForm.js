import React from 'react'

export default function ProductDetailsForm({setName, setPrice, setDiscount}) {
    return (
        <div className="h-full w-full flex flex-wrap flex-col md:flex-row gap-3 md:gap-5 mt-3 md:mt-5">
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
                placeholder="discount price"
                autoComplete="off"
                onChange={e=>{setDiscount(e.target.value)}}
                className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
            />
        </div>
    );
}
