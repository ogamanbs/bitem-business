import React from 'react';
import {
  RiBox3Line
} from '@remixicon/react';

export default function AllProductsSection() {
  return (
    <div className="py-2 px-4 flex items-center md:p-0 rounded-full md:rounded-none border border-zinc-400 md:border-none">
      <div className="hidden md:block"> 
      <h1 className="cursor-pointer hover:px-5 p-2 hover:bg-zinc-100 rounded-lg transition linear delay-100">All Products</h1>
      </div>
      <div className="block md:hidden">
        <div className=""><RiBox3Line /></div>
      </div>
    </div>
  )
}
