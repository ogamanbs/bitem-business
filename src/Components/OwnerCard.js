import {RiBox3Line, RiTruckLine } from '@remixicon/react'
import React from 'react'

export default function OwnerCard({owner, products}) {
  return (
    <div className="w-auto h-auto flex flex-col md:flex-row gap-4 items-center">
      <div className="w-48 h-auto rounded-full overflow-hidden">
          <img className="" src={owner.image} alt={owner.name} />
      </div>
      <div className="w-full h-auto flex flex-col gap-2 items-center">
        <div className="w-full flex flex-col items-center">
            <h1 className="text-xl capitalize">{owner.name}</h1>
            <h1 className="font-light">{owner.email}</h1>
        </div>
        <div className="flex gap-10 justify-center">
          <div className="flex gap-2">
            <abbr className="cursor-pointer" title="Products"><RiBox3Line /></abbr>
            <h1 className=""> : {products.length}</h1>
          </div>
          <div className="flex gap-2">
            <abbr className="cursor-pointer" title="Products Delivered"><RiTruckLine /></abbr>
            <h1 className=""> : 0</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
