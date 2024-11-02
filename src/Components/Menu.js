import React from 'react';
import CreateSection from './CreateSection';
import AllProductsSection from './AllProductsSection';
import ProfileSection from './ProfileSection';
import OrdersSection from './OrdersSection';

export default function Menu() {
  return (
    <div className="px-5 md:px-10 py-10 text-sm border-r border-zinc-300 h-full">
      <ProfileSection />
      <OrdersSection />
      <AllProductsSection />
      <CreateSection />
    </div>
  )
}
