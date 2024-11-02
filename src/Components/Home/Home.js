import React from 'react';
import OwnerCard from '../OwnerCard';

export default function Home({owner, setOwner, setShowModel, setDeleteModel}) {
  return (
    <div className="h-full w-full md:h-auto">
      {owner && <OwnerCard owner={owner} setOwner={setOwner} setShowModel={setShowModel} setDeleteModel={setDeleteModel} />}
      {!owner && <h1 className="px-10">Loading owner details....</h1>}
    </div>
  )
}
