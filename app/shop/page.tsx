import React from 'react';
import Product from '../(components)/product';
import { getProduct } from '../lib/getProducts';

export default async function Shop() {
  const product = await getProduct();

  return (
    <div className="flex w-full flex-col items-center text-[32px] mt-[1em] mb-[2em] ">
      <h1 className="mb-[1em]">Our products</h1>
      <div className="w-full flex justify-center">
        <div className="flex w-[87%] flex-wrap gap-4 ">
          {Array.isArray(product) &&
            product.map((item, index) => (
              <Product key={index} product={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
