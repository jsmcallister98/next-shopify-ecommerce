import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { getAllProducts, getProduct } from "@lib/shopify";
import Nav from "@components/v2/Nav";
import { ProductDetails as IProductDetails } from "productDetails.types";
import ProductDetailsPage from "@components/v2/Pages/ProductDetails";

export interface ProductPageProps extends React.HTMLProps<HTMLDivElement> {
  product: IProductDetails;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="min-h-screen">
      <Nav variant="dark" />
      <ProductDetailsPage product={product} />
    </div>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();

  const paths = products.map((item: any) => {
    const product = String(item.node.handle);

    return { params: { product } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = (await getProduct(params?.product)) as IProductDetails;

  return {
    props: {
      product,
    },
  };
};
