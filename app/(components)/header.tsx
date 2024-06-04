import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full h-[100px] flex justify-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <Link className=" flex " href={'/'}>
          <Image
            src={'/logo.svg'}
            alt={'logo'}
            width={195}
            height={41}
            layout="responsive"
            className="max-w-[195px]"
          ></Image>
        </Link>
        <nav className=" h-full  flex items-center gap-20">
          <Link
            href={'/'}
            className="hover:border-b-[3px] text-[16px] border-black"
          >
            Home
          </Link>
          <Link
            href={'/shop'}
            className="hover:border-b-[3px] text-[16px] border-black"
          >
            Shop
          </Link>
          <Link
            href={'/about'}
            className="hover:border-b-[3px] text-[16px] border-black"
          >
            About
          </Link>
          <Link
            href={'/contacts'}
            className="hover:border-b-[3px] text-[16px] border-black"
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-10">
          <Link href={'/profile'}>
            <Image
              src={'/acc.svg'}
              alt={'acc'}
              layout="responsive"
              height={28}
              width={28}
              className="max-w-[28px]"
            ></Image>
          </Link>
          <button>
            <Image
              src={'/search.svg'}
              alt={'acc'}
              layout="responsive"
              height={28}
              width={28}
              className="max-w-[28px]"
            ></Image>
          </button>
          <button>
            <Image
              src={'/heart.svg'}
              alt={'acc'}
              layout="responsive"
              height={28}
              width={28}
              className="max-w-[28px]"
            ></Image>
          </button>
          <Link href={'/cart'}>
            <Image
              src={'/cart.svg'}
              alt={'acc'}
              layout="responsive"
              height={28}
              width={28}
              className="max-w-[28px]"
            ></Image>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
