import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllProductsSection() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products');
  }
  return (
    <div className="flex items-center">
      <button onClick={handleClick}>
          <h1 className="cursor-pointer px-5 p-1 hover:bg-zinc-100 rounded-lg transition linear delay-100">Products</h1>
      </button>
    </div>
  )
}