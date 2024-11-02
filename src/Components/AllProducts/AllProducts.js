'use client'
import React from 'react';
import Product from './Product';
import ProductSmall from './ProductSmall';

export default function AllProducts({products}) {
  return (
    <>
        { products === null && <div className="w-full md:w-4/5 h-1/2 text-center md:text-start mt-5 md:mt-10 px-20"><h1 className="">Loading Products...</h1></div> }
        { products !== null && products.length === 0 && <div className="w-full md:w-4/5 h-1/2 text-center md:text-start mt-5 md:mt-10 px-20"><h1 className="">No Products yet.</h1></div> }
        {products !== null && products.length > 0 && (
          <div className="w-full md:w-4/5 h-full flex flex-wrap gap-3 md:gap-5 justify-center md:justify-start md:px-10 md:py-5 overflow-scroll">
            <div className="hidden md:block h-full w-full px-10 md:px-20">
              <div className="w-full h-auto flex flex-wrap gap-10">
                {products.length > 0 && products.map((product) => (
                    <Product key={product.name} product={product} />
                ))}
              </div>
            </div>
            <div className="block md:hidden h-full w-full md:px-20">
                <div className="w-full h-auto flex flex-col">
                  {products.length > 0 && products.map((product) => (
                      <ProductSmall key={product.name} product={product} />
                  ))}
                </div>
            </div>
          </div>
        )}
    </>
  );
}
