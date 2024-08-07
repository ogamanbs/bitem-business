import { RiAddFill } from '@remixicon/react';
import React from 'react'

export default function Product({product}) {
    return (
        <div className="card h-64 md:h-64 w-36 md:w-56 text-xs md:text-sm flex flex-col">
            <div className="h-3/4 py-5" style={{'background-color' : `${product.bgcolor}`}}>
                <img className="w-full h-full object-contain" src={product.image} alt={product.name} />
            </div>
            <div className='h-1/4 p-3' style={{ 'background-color' : `${product.panelcolor}`, 'color': `${product.textcolor}`}}>
                <div className="flex justify-between gap-3 font-medium">
                    <div className="w-auto">
                        <h1 className="">{product.name}</h1>
                        <h2 className="">₹ {product.price}</h2>
                    </div>
                    <div className="w-auto flex items-center">
                        <div className="rounded-full w-full px-2 py-1 bg-white cursor-pointer border border-zinc-400 text-black">
                           <RiAddFill size={17} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
