import ProductCard from "@components/ProductCard";
import Link from "next/link";

export default function Hero({ products }: any) {
  return (
    <div className="relative my-auto mx-0 flex h-auto w-full justify-center  bg-contain bg-no-repeat px-4 pt-24 text-center sm:pt-44  md:bg-cover md:pt-36 lg:pt-44 xl:pt-52">
      {/* <img
        src="/images/main-scene.svg"
        className=""
        style={{ visibility: "hidden" }}
        alt=""
      /> */}
      <h1 className="inline-block text-left text-gray-900">
        <p className="mb-2 text-2xl sm:text-5xl xl:text-6xl">New Spring 22</p>
        <p className="text-2xl sm:text-5xl xl:text-6xl">
          Collection. <span className="text-[#45B684]">Get Inspired.</span>
        </p>
        <div className="mt-5 flex max-w-md items-center justify-start text-left md:mt-8">
          <Link href={`/products`}>
            <a
              href="/products"
              className="mr-6 inline-flex h-12 items-center justify-center rounded-md border-transparent bg-[#45B684] px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Shop Now
            </a>
          </Link>
        </div>
      </h1>
      {/* <div className="absolute bottom-0 left-10 w-64">
        <ProductCard product={products[0]} />
      </div> */}
    </div>
  );
}
