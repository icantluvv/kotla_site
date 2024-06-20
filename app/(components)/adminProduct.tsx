import React from 'react';
import Image from 'next/image';
import ButtonAdminDeleteProduct from './buttonAdminDeleteProduct';

const AdminProduct: React.FC<ProductProps> = ({ product }) => {
  const baseUrl = `${process.env.baseApi}lipstick/image/`;

  return (
    <div className="flex max-w-[380px] border-2 h-[524px] flex-col justify-around items-center relative">
      <ButtonAdminDeleteProduct prop={product.id}></ButtonAdminDeleteProduct>
      <div className="max-w-[236px] max-h-[292px]">
        <Image
          src={`${baseUrl}${product.image}`}
          alt={''}
          width={391}
          height={524}
          className="max-w-[386px]"
          layout="responsive"
        ></Image>
      </div>
      <span className="text-[16px] font-semibold mt-[1em] mb-[1em] w-[90%]">
        {product.Name}
      </span>
      <div className="w-[90%] h-[1px] bg-[#d9d9d9]"></div>
      <p className="w-[90%]  text-[13px] text-[#141414] font-light">
        Высокопигментированная кремовая формула Shout Loud Satin Lipstick
        придает губам интенсивный цвет с роскошным атласным финишем.
      </p>
    </div>
  );
};

export default AdminProduct;
