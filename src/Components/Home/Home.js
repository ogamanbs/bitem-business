import React from 'react';
import OwnerCard from '../OwnerCard';

export default function Home({owner, products}) {
  return (
    <div className="h-[76vh] md:h-auto px-10">
      {owner && products && <OwnerCard owner={owner} products={products} />}
      {(!owner || !products) && <h1 className="">Loading owner details....</h1>}
    </div>
  )
}
