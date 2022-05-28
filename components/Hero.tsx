import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto mt-24 h-screen max-h-[550px] max-w-7xl px-4 text-center sm:mt-24 md:mt-48">
      <h1 className="inline-block text-left text-gray-900">
        <p className="mb-2 text-xl sm:text-3xl md:text-6xl">New Spring 22</p>
        <p className="text-xl sm:text-3xl md:text-6xl">
          Collection. <span className="text-[#45B684]">Get Inspired.</span>
        </p>
        {/* <p className="bg-gradient-to-r from-blue-700 via-cyan-700 to-emerald-700 bg-clip-text text-4xl text-transparent sm:text-6xl md:text-7xl">
          New Spring 22 Collection.
        </p> */}
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
    </div>
  );
}
