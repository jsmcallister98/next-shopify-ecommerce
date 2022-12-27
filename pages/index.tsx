import { getProductsInCollection } from "@lib/shopify";
import ProductList from "@components/ProductList";
import Hero from "@components/Hero/Hero";
import Head from "next/head";
import Home from "@components/v2/Pages/Home";
import { Product } from "productList.types";

interface HomePageProps {
  products: Product[];
}

export default function HomePage({ products }: HomePageProps) {
  return (
    <Home products={products} />
    // <div className="relative inline-block min-h-screen w-screen overflow-hidden">
    //   <Head>
    //     <title>McGolf Golf Apparel</title>
    //     <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    //     <meta
    //       httpEquiv="Content-Type"
    //       content="text/html; charset=ISO-8859-1"
    //     />
    //     <meta
    //       name="description"
    //       content="Casual golf focused apparel with cool and unique designed hoodies, sweater, t-shirts, and hats."
    //     />
    //     <meta property="og:title" content="McGolf Golf Apparel" />
    //     <meta property="og:type" content="website" />
    //     <meta property="og:url" content="https://www.mcgolf.com" />
    //     <meta
    //       property="og:image"
    //       content="https://www.buildnextshop.com/share.png"
    //     />
    //     <meta
    //       property="og:description"
    //       content="Casual golf focused apparel with cool and unique designed hoodies, sweater, t-shirts, and hats."
    //     />
    //     <meta property="og:locale" content="en_US" />
    //     <meta property="og:site_name" content="Casual golf apparel" />
    //   </Head>
    //   <div className="relative mb-0 h-max w-full">
    //     <img
    //       src={"/images/main-scene.svg"}
    //       className="pointer-events-none z-0 hidden h-auto max-h-screen w-full object-cover sm:block"
    //     />
    //     <img
    //       src={"/images/is-svg1.svg"}
    //       className="pointer-events-none z-0 h-auto max-h-screen w-full object-cover sm:hidden"
    //     />
    //     <div className="absolute top-0 left-0 right-0 bottom-0 mx-auto">
    //       <Hero />
    //     </div>
    //   </div>
    //   <ProductList products={products} />
    // </div>
  );
}

export async function getStaticProps() {
  const products = (await getProductsInCollection()) as Product[];

  return {
    props: { products }, // will be passed to the page component as props
  };
}
