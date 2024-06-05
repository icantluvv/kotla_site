'use client';
import React, { useEffect, useState } from 'react';
import { getPrice } from '../lib/getPrice';
import MakeOrder from '../lib/makeOrder';

const TotalPrice = () => {
  const [price, setPrice] = useState<Price>();

  function goToOrder() {
    MakeOrder();
    window.location.reload();
  }

  useEffect(() => {
    async function fetchCart() {
      const total = await getPrice();
      setPrice(total);
    }
    fetchCart();
  }, []);
  return (
    <div className="w-[35%] max-h-[200px] border-2 flex flex-col items-center">
      <h1 className="mt-[1em] text-[20px] flex flex-1">Your cart</h1>
      <div className="flex w-[90%] mt-[2em] mb-[1em] justify-between  ">
        <span className="text-[20px]">Стомость:</span>
        <span className="text-[20px]">{price?.Total_Amount} р</span>
      </div>
      <button
        onClick={goToOrder}
        className="w-[90%] h-[48px] bg-black text-white mb-[1em]"
      >
        Buy
      </button>
    </div>
  );
};

export default TotalPrice;
