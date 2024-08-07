import React from 'react';
import Product from '../(components)/product';
import { getProduct } from '../lib/getProducts';
import IfAdmin from '../(components)/ifAdmin';

export default async function Shop() {
  const product = await getProduct();

  return (
    <main className="flex w-full flex-col items-center text-[32px] mt-[1em] mb-[2em] ">
      <section className="flex w-full justify-center items-center relative">
        <h1 className="mb-[1em] flex items-center">Our products</h1>
        <IfAdmin />
      </section>

      <section className="w-full flex justify-center">
        <div className="flex w-[87%] flex-wrap gap-4 ">
          {Array.isArray(product) &&
            product.map((item, index) => (
              <Product key={index} product={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
