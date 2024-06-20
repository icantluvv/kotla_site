import Image from 'next/image';
import Product from './(components)/product';
import Brand from './(components)/brand';
import Link from 'next/link';
import { getBrand } from './lib/getBrands';
import { getProduct } from './lib/getProducts';

export default async function Home() {
  const brand = await getBrand();
  const product = await getProduct();

  return (
    <main className="w-full flex flex-col ">
      <section className="flex flex-col items-center mt-[2em] mb-[4em]">
        <h1 className="text-[32px] mb-[1em] font-bold	">Browse The Range</h1>
        <p className="w-[85%] text-[20px] mb-[3em] font-light">
          Explore our diverse range of lipsticks designed to suit every style
          and occasion. Whether you prefer a bold matte finish, a glossy shine,
          or long-lasting color, our collection has the perfect lipstick for
          you.
        </p>
        <div className="flex w-[90%] justify-center gap-6 flex-wrap">
          {Array.isArray(brand) &&
            brand.map((item, index: number) => (
              <Brand key={index} brand={item}></Brand>
            ))}
        </div>
      </section>

      <section className="flex flex-col items-center mb-[2em]">
        <h1 className="text-[40px] mb-[1em] font-bold	">Our Products</h1>

        <div className="flex w-[90%] mb-[1em] justify-center gap-6 flex-wrap">
          {Array.isArray(product) &&
            product
              .slice(0, 3)
              .map((item, index) => <Product key={index} product={item} />)}
        </div>
        <Link
          href="/shop"
          className="border-[2px] active:bg-[#999999] hover:bg-[#F4F5F7] mt-[3em] border-black w-[245px] h-[48px] flex justify-center items-center"
        >
          Show More
        </Link>
      </section>

      <section className="bg-black w-full h-[auto] flex justify-center">
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
      </section>

      <section className="mt-[5em] mb-[5em]">
        <Image
          src={'/back_lower.svg'}
          alt={''}
          width={1799}
          height={780}
          layout="responsive"
          className="max-h-[780px]"
        ></Image>
      </section>
    </main>
  );
}
