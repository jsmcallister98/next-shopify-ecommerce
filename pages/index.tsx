import { getProductsInCollection } from "@lib/shopify";
import ProductList from "@components/ProductList";
import Hero from "@components/Hero/Hero";
import Head from "next/head";
import HeroProductSection from "@components/Hero/HeroProductSection";

export default function Home({ products }: any) {
  return (
    <div className="relative inline-block min-h-screen w-screen overflow-hidden">
      <Head>
        <title>McGolf Golf Apparel</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Casual golf focused apparel with cool and unique designed hoodies, sweater, t-shirts, and hats."
        />
        <meta property="og:title" content="McGolf Golf Apparel" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mcgolf.com" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/share.png"
        />
        <meta
          property="og:description"
          content="Casual golf focused apparel with cool and unique designed hoodies, sweater, t-shirts, and hats."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Casual golf apparel" />
      </Head>
      <div className="relative mb-80 h-max w-full">
        <img
          src={"/images/main-scene.svg"}
          className="pointer-events-none z-0 h-auto max-h-screen w-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 mx-auto">
          <Hero products={products} />
        </div>
        <HeroProductSection products={products} />
      </div>
      <div className="flex justify-center">
        <button className="ml-80 -mt-16 mb-20 rounded-2xl bg-[#45B684] py-6 px-20 text-xl font-medium text-white">
          Shop Now
        </button>
      </div>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
