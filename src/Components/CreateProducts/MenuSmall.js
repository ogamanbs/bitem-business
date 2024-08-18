import React from 'react';
import AllProdSmallSection from './AllProdSmallSection';
import ProfileSmallSection from './ProfileSmallSection';
import CreateSmallSection from './CreateSmallSection';

export default function MenuSmall({owner}) {
    return (
        <div className="h-[7vh] text-sm flex items-center border-b border-zinc-200 px-10 justify-between">
            <div className="flex items-center gap-10">
                <AllProdSmallSection />
                <CreateSmallSection />
            </div>
            <div className="">
                <ProfileSmallSection owner={owner} />
            </div>
        </div>
    );
}
