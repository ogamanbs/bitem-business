import React from 'react';
import LogoImage from '../LogoImage';

export default function OwnerHead() {
  return (
    <div className="w-auto h-auto flex items-center gap-2">
      <div className="h-5 w-7">
        <LogoImage />
      </div>
      <h1 className='text-2xl font-bold text-blue-400'>Bitem Business</h1>
    </div>
  );
}
