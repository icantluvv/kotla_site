'use client';
import React from 'react';
import { adminDelProduct } from '../lib/adminDelProduct';

const ButtonAdminDeleteProduct = ({ prop }: { prop: number }) => {
  function DeleteProduct() {
    adminDelProduct(prop);
    window.location.reload();
  }

  return (
    <button
      onClick={DeleteProduct}
      className="absolute w-[30px] h-[30px] bg-red-500 top-0 right-0 text-[16px] text-white"
    >
      X
    </button>
  );
};

export default ButtonAdminDeleteProduct;
