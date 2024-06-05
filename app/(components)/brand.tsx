import React from 'react';
import Image from 'next/image';

const Brand: React.FC<BrandsProps> = ({ brand }) => {
  return (
    <div className="flex max-w-[386px] flex-col items-center">
      <div>
        <Image
          src={'/1st.svg'}
          alt={''}
          width={386}
          height={357}
          className="max-w-[386px]"
          layout="responsive"
        ></Image>
      </div>
      <span className="text-[24px]  mt-[2em] text-[#333333] font-semibold">
        {brand.Brand_Name}
      </span>
    </div>
  );
};

export default Brand;
