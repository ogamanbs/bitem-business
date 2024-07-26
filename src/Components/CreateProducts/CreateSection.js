import React from 'react';
import {
  RiAddLine
} from '@remixicon/react';

export default function CreateSection() {
  return (
    <div className="p-2 md:p-0 rounded-full md:rounded-none border border-zinc-400 md:border-none">
      <div className="hidden md:block">
        <h1 className="cursor-pointer hover:px-5 p-2 hover:bg-zinc-100 rounded-lg transition linear delay-100">Create Products</h1>
      </div>
      <div className="block md:hidden p-2">
        <div className=""><RiAddLine /></div>
      </div>
    </div>
  )
}
