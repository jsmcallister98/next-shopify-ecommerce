import { getProductsInCollection } from "@lib/shopify";
import ProductList from "@components/ProductList";

export default function Products({ products }: any) {
  return (
    <div className="mt-20">
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
