import React from 'react';
import OwnerHead from '../../Components/OwnerHead';
import Menu from '../../Components/Menu';
import Logout from '../../Components/Logout';
import MenuSmall from '../../Components/MenuSmall';

export default function OrdersPage({owner, setOwner}) {
    return (
        <div className='w-full h-auto'>
            <div className="h-[7vh] w-full flex items-center justify-between px-5 md:px-10 md:justify-between border-b border-zinc-200 md:border-0">
                <OwnerHead />
                <Logout setOwner={setOwner} />
            </div>
            <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
                <div className="hidden md:block w-[20%]">
                <Menu />
                </div>
                <div className="w-auto block md:hidden">
                <MenuSmall owner={owner} />
                </div>
                <div className="w-full md:w-4/5 h-1/2 text-center md:text-start mt-5 md:mt-10 px-20">
                    <h1 className="">Orders will be displayed here</h1>
                </div>
            </div>
        </div>
    );
}