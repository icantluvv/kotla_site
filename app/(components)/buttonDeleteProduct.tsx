'use client';
import React from 'react';
import { deleteProduct } from '../lib/deleteProduct';

const ButtonDeleteProduct = ({ prop }: { prop: number }) => {
  function DeleteCart() {
    deleteProduct(prop);
    window.location.reload();
  }

  return (
    <button
      onClick={DeleteCart}
      className="text-[14px] bg-black text-white pl-[1em] pr-[1em]"
    >
      Delete
    </button>
  );
};

export default ButtonDeleteProduct;
