import { RiDeleteBinLine, RiPencilLine } from '@remixicon/react';
import React from 'react'

export default function Product({product}) {
    return (
        <div className="relative card h-64 md:h-72 w-36 md:w-56 text-xs md:text-sm flex flex-col hover:shadow-lg cursor-pointer">
            <button className="absolute rounded-full w-auto -right-4 -top-4 bg-white p-2 cursor-pointer text-red-500 border border-red-500">
                <RiDeleteBinLine size={20} />
            </button>
            <div className="h-3/4 py-5" style={{ 'backgroundColor' : `${product.bgcolor}`}}>
                <img className="w-full h-full object-contain" src={product.image} alt={product.name} />
            </div>
            <div className='h-1/4 px-3 py-3' style={{ 'backgroundColor' : `${product.panelcolor}`, 'color': `${product.textcolor}`}}>
                <div className="flex justify-between gap-3 font-medium">
                    <div className="w-auto">
                        <h1 className="" style={{'color': `${product.textcolor}`}}>{product.name}</h1>
                        <h2 className="text-lime-700 text-base mt-1 px-2 bg-white rounded-full">₹ {product.price - product.discount}</h2>
                    </div>
                    <div className="w-auto flex flex-row items-center gap-3">
                        <button className="rounded-full w-full bg-white p-2 cursor-pointer text-blue-500 border border-zinc-400">
                            <RiPencilLine size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
