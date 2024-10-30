import React from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import Home from '../Components/Home/Home';
import Logout from '../Components/Logout';
import MenuSmall from '../Components/CreateProducts/MenuSmall';

export default function HomePage({owner, products, setProducts, setOwner}) {
  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] flex items-center justify-between px-5 md:px-10 md:justify-between border-b border-zinc-200 md:border-0">
            <OwnerHead />
            <Logout setProducts={setProducts} setOwner={setOwner} />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-[20%]">
              <Menu />
            </div>
            <div className="w-auto block md:hidden">
              <MenuSmall owner={owner} />
            </div>
            <Home owner={owner} products={products} />
        </div>
    </div>
  );
}