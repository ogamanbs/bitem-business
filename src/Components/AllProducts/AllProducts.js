'use client'
import React, {useState, useEffect} from 'react';
import Product from './Product';
import ProductSmall from './ProductSmall';


const getProducts = async () => {
  try {
    const response = await fetch('https://business-server.vercel.app/products/all');
    if(!response.ok) {
      return {products: [], message: "error fetching products"};
    } else {
      const data = await response.json();
      return data;
    }
  } catch(err) {
    return {products: [], message: "error fetching products"};
  }
}

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const call = async () => {
      const data = await getProducts();
      setProducts(data.products);
      setMessage(data.message);
    }
    call();
  }, [products]);

  return (
      <div className="w-full md:w-4/5 h-full flex flex-wrap gap-3 md:gap-5 px-3 justify-center md:justify-start md:px-10 md:py-5 overflow-scroll">
        { products.length === 0 && message && <div className="w-full h-1/2 flex items-center justify-center"><h1 className="">No Products Yet</h1></div> }
        { message === "" && <div className="w-full h-1/2 flex justify-center items-center"><h1 className="">Loading....</h1></div>}
        <div className="hidden md:block h-full w-full right-0 px-10 md:px-20">
            <div className="w-full h-auto flex flex-wrap gap-5">
              {products.length > 0 && products.map((product) => (
                  <Product key={product.name} product={product} />
              ))}
            </div>
        </div>
        <div className="block md:hidden h-full w-full right-0 px-3 md:px-20">
            <div className="w-full h-auto flex flex-col gap-1">
              {products.length > 0 && products.map((product) => (
                  <ProductSmall key={product.name} product={product} />
              ))}
            </div>
        </div>
      </div>
  );
}
