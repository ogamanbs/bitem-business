import { RiDeleteBinLine, RiPencilLine } from '@remixicon/react';
import React from 'react'

export default function ProductSmall({product}) {
    return (
        <div className="card h-36 w-full text-sm flex border-b border-zinc-200">
            <div className="h-full w-36 overflow-hidden flex" style={{"backgroundColor":`${product.bgcolor}`}}>
                <div className="h-30 w-30 overflow-hidden">
                    <img className="w-full h-full object-contain" src={product.images[0]} alt={product.name} />
                </div>
            </div>
            <div className='h-full w-full flex justify-between items-center gap-3 font-medium bg-white'  style={{"backgroundColor":`${product.panelcolor}`}}>
                <div className="w-auto px-5">
                    <h1 className="text-lg">{product.name}</h1>
                    <h2 className="text-lime-700 text-xl mt-2 bg-white rounded-full px-2 py-1">₹ {product.price - (product.price * product.discount / 100) }</h2>
                </div>
                <div className="w-auto flex flex-col gap-3 items-center px-5">
                    <button className="rounded-full w-full p-2 bg-white border border-zinc-400 cursor-pointer text-red-500 flex items-center justify-center">
                        <RiDeleteBinLine size={25} />
                    </button>
                    <button className="rounded-full w-full p-2 bg-white cursor-pointer border border-zinc-400 text-blue-500">
                        <RiPencilLine size={25} />
                    </button>
                </div>
            </div>
        </div>
    );
}
