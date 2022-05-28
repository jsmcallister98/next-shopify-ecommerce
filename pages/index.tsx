import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }: any) {
  return (
    <div className="home bg-mobile-scene-with-wave bg-contain bg-no-repeat lg:bg-scene-with-wave">
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
      <Hero />
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
