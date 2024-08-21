import React from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import AllProducts from '../Components/AllProducts/AllProducts';
import Logout from '../Components/Logout';
import MenuSmall from '../Components/CreateProducts/MenuSmall';

export default function AllProductsPage({owner, products, setOwner, setProducts}) {
  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] w-full flex items-center justify-between px-5 md:px-10 md:justify-between border-b border-zinc-200 md:border-0">
            <OwnerHead />
            <Logout setOwner={setOwner} setProducts={setProducts} />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-auto">
              <Menu />
            </div>
            <div className="w-auto block md:hidden">
              <MenuSmall owner={owner} />
            </div>
            <AllProducts products={products} owner={owner} />
        </div>
    </div>
  )
}