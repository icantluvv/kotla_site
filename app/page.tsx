import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full flex flex-col ">
      <div className="flex flex-col items-center mt-[2em] mb-[4em]">
        <h1 className="text-[32px] mb-[1em] font-bold	">Browse The Range</h1>
        <p className="w-[85%] text-[20px] mb-[3em] font-light">
          Explore our diverse range of lipsticks designed to suit every style
          and occasion. Whether you prefer a bold matte finish, a glossy shine,
          or long-lasting color, our collection has the perfect lipstick for
          you.
        </p>
        <div className="flex w-[90%] justify-center gap-6 flex-wrap">
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
              Matte
            </span>
          </div>
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
            <span className="text-[24px] mt-[2em] text-[#333333] font-semibold">
              Matte
            </span>
          </div>
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
            <span className="text-[24px] mt-[2em] text-[#333333] font-semibold">
              Matte
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-[2em]">
        <h1 className="text-[40px] mb-[1em] font-bold	">Our Products</h1>

        <div className="flex w-[90%] justify-center gap-6 flex-wrap">
          <div className="flex max-w-[391px] max-h-[524px] flex-col items-center">
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
            <span className="text-[24px] mt-[2em]">Matte</span>
          </div>
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
            <span className="text-[24px] mt-[2em]">Matte</span>
          </div>
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
            <span className="text-[24px] mt-[2em]">Matte</span>
          </div>
        </div>
      </div>

      <div className="bg-black w-full h-[auto] flex justify-center">
        <div className="flex w-[90%] pt-[3em] pb-[3em] justify-between items-center">
          <div className="text-white w-[27%]">
            <h1 className="text-[40px]">Beautiful lipstick inspiration</h1>
            <p className="text-[16px] mt-[2em]">
              Our administrators have already acquired many beautiful lipsticks
              that will enhance your smile.
            </p>
            <button className="bg-red-600 active:bg-red-800 mt-[2em] text-white text-[16px] w-[146px] h-[48px]">
              Explore More
            </button>
          </div>
          <div>
            <Image
              src={'/Products.svg'}
              alt={''}
              width={800}
              height={582}
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>

      <div className="mt-[5em] mb-[5em]">
        <Image
          src={'/back_lower.svg'}
          alt={''}
          width={1799}
          height={780}
          layout="responsive"
          className="max-h-[780px]"
        ></Image>
      </div>
    </main>
  );
}
