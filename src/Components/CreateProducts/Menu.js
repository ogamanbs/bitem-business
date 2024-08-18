import React from 'react';
import CreateSection from './CreateSection';
import AllProductsSection from './AllProductsSection';
import ProfileSection from './ProfileSection';

export default function Menu() {
  return (
    // <div className="hidden h-auto md:h-full w-full md:w-1/5 md:flex md:flex-col gap-5 md:gap-0 px-10 mb-5 justify-center md:justify-start md:mb-0 md:py-5 text-sm border-r border-zinc-300">
    <div className="px-10 py-10 text-sm border-r border-zinc-300 h-full">
      <ProfileSection />
      <AllProductsSection />
      <CreateSection />
    </div>
  )
}
