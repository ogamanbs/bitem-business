import React from 'react';
import AllProdSmallSection from './AllProdSmallSection';
import ProfileSmallSection from './ProfileSmallSection';
import CreateSmallSection from './CreateSmallSection';
import OrdersSmallSection from './OrdersSmallSection';

export default function MenuSmall({owner}) {
    return (
        <div className="h-[7vh] text-sm flex items-center border-b border-zinc-200 px-5 justify-between">
            <div className="flex items-center gap-10">
                <AllProdSmallSection />
                <OrdersSmallSection />
                <CreateSmallSection />
            </div>
            <div className="">
                <ProfileSmallSection owner={owner} />
            </div>
        </div>
    );
}
