import React from 'react';
import CartItem from '../(components)/cartItem';
import { getPrice } from '../lib/getPrice';
import TotalPrice from '../(components)/TotalPrice';

export default async function Cart() {
  return (
    <main className="w-full flex flex-col items-center mt-[2em] mb-[5em]">
      <h1 className="text-[32px] mb-[2em]">Cart</h1>
      <div className="w-[90%] h-full flex">
        <div className="flex flex-wrap gap-4 w-[65%]">
          <CartItem></CartItem>
        </div>
        <TotalPrice></TotalPrice>
      </div>
    </main>
  );
}
