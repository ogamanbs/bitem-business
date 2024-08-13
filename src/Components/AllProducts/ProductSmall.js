import { RiPencilLine } from '@remixicon/react';
import React from 'react'

export default function ProductSmall({product}) {
    return (
        <div className="card h-32 w-full text-sm flex items-center">
            <div className="h-32 w-32 overflow-hidden flex items-center justify-center" style={{"backgroundColor":`${product.bgcolor}`}}>
                <div className="h-20 w-20 overflow-hidden">
                    <img className="w-full h-full object-contain" src={product.image} alt={product.name} />
                </div>
            </div>
            <div className='h-full w-full p-3 flex flex-col justify-center' style={{ 'backgroundColor' : `${product.panelcolor}`, 'color': `${product.textcolor}`}}>
                <div className="flex justify-between gap-3 font-medium">
                    <div className="w-auto">
                        <h1 className="">{product.name}</h1>
                        <h2 className="">₹ {product.price}</h2>
                    </div>
                    <div className="w-auto flex items-center">
                        <div className="rounded-full w-full px-2 py-1 bg-white cursor-pointer text-black border border-zinc-400">
                            <RiPencilLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
