'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getCart } from '../lib/getCart';
import ButtonDeleteProduct from './buttonDeleteProduct';

const CartItem = () => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    async function fetchCart() {
      const cartItems = await getCart();
      setCart(cartItems);
    }
    fetchCart();
  }, []);

  const baseUrl = `${process.env.baseApi}`;
  return (
    <div className="w-full flex flex-wrap gap-4">
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex max-w-[300px] border-2 flex-col justify-around items-center"
        >
          <div className="max-w-[236px] flex justify-center p-[2em] max-h-[292px]">
            <Image
              src={`${baseUrl}lipstick/image/${item.CartItem.lipstick.image}`}
              alt={''}
              width={391}
              height={524}
              className="max-w-[270px]"
              layout="responsive"
            ></Image>
          </div>
          <span className="text-[20px] font-semibold  mb-[1em] w-[90%]">
            {item.CartItem.lipstick.Name}
          </span>
          <div className="flex w-[90%] mt-[1em]  mb-[1em] justify-between">
            <ButtonDeleteProduct prop={item.CartItem.id}></ButtonDeleteProduct>
            <h1 className="text-[20px]">{item.CartItem.lipstick.Price}p</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
