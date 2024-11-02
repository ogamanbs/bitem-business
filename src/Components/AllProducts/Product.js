import React from 'react'

export default function Product({product}) {
    return (
        <div className="relative card h-64 md:h-72 w-36 md:w-56 text-xs md:text-sm flex flex-col hover:shadow-lg cursor-pointer border border-zinc-200">
            <div className="h-3/4 py-5">
                <img className="w-full h-full object-contain" src={product.images[0]} alt={product.name} />
            </div>
            <div className='h-1/4 px-3 py-3 border-t border-zinc-200'>
                <div className="flex justify-between gap-3 font-medium">
                    <div className="w-auto">
                        <h1 className="">{product.name}</h1>
                        <h2 className="text-lime-700 text-base mt-1 px-2 bg-white rounded-full">₹ {product.price - (product.price * product.discount / 100)}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
