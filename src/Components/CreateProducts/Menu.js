import React from 'react';
import CreateSection from './CreateSection';
import AllProductsSection from './AllProductsSection';

export default function Menu() {
  return (
    <div className="h-auto md:h-full w-full md:w-1/4 flex md:flex-col gap-5 md:gap-0 px-10 py-5 md:py-10 text-sm border-r border-zinc-300 mb-5 md:mb-0">
      <AllProductsSection />
      <CreateSection />
    </div>
  )
}
