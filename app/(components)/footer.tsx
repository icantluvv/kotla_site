import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full h-[247px] bg-black text-white flex flex-col justify-around text-[#D9D9D9] items-center">
      <div className="flex w-[90%] mt-[2em] mb-[2em] gap-[13%]">
        <div className=" flex flex-col h-[100px] justify-around">
          <Link href={'/'} className="text-[16px] ">
            Home
          </Link>
          <Link href={'/help'} className="text-[16px] ">
            Help
          </Link>
        </div>
        <div className=" flex flex-col  h-[100px] justify-around ">
          <Link href={'/shop'} className="text-[16px] ">
            Shop
          </Link>
          <Link href={'/Payment'} className="text-[16px] ">
            Payment Options
          </Link>
        </div>

        <div className=" flex flex-col  h-[100px] justify-around">
          <Link href={'/about'} className="text-[16px] ">
            About
          </Link>
          <Link href={'/returns'} className="text-[16px] ">
            Returns
          </Link>
        </div>

        <div className=" flex flex-col  h-[100px] justify-around">
          <Link href={'/contacts'} className="text-[16px] ">
            Contacts
          </Link>
          <Link href={'/privacy'} className="text-[16px] ">
            Privacy Policies
          </Link>
        </div>
      </div>

      <div className="w-[90%] h-[1px] bg-[#D9D9D9] opacity-40"></div>
      <div className="w-[90%] mb-[2em]">
        <p className="text-[#D9D9D9] opacity-50">
          2024 lipstick All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
