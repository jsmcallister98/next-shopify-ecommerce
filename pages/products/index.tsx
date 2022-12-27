import { getProductsInCollection } from "@lib/shopify";
import Category from "@components/v2/Pages/Category";

export default function Products({ products }: any) {
  return (
    <div className="">
      <Category products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
