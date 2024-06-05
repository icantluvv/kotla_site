'use client';
import React from 'react';
import addProduct from '../lib/addProduct';

const ButtonAddProduct = ({ prop }: { prop: number }) => {
  function addProductToCart() {
    addProduct(prop);
  }

  return (
    <button
      onClick={addProductToCart}
      className="bg-black text-white w-[144px] h-[35px] text-[11px]"
    >
      Buy Now
    </button>
  );
};

export default ButtonAddProduct;
