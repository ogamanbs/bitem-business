import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/create-products');
  }
  return (
    <div className="flex items-center">
      <button onClick={handleClick}>
          <h1 className="cursor-pointer px-5 p-1 hover:bg-zinc-100 rounded-lg transition linear delay-100">Create Products</h1>
      </button>
    </div>
  )
}
