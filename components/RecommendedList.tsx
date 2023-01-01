import { formatter } from "@utils/helpers";
import Link from "next/link";
import ProductCard from "./ProductCard";

interface RecommendedListProps {
  products: any[];
  current: string;
}

const RecommendedList = ({ products, current }: RecommendedListProps) => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-2xl py-14 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">
          Recommended Products
        </h2>
        {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) =>
            product.node.id === current ? null : (
              <ProductCard key={product.node.id} product={product} />
            )
          )}
        </div> */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products
            ?.filter((product) => product.node.id !== current)
            .map((product) => (
              <div key={product.node.id} className="group relative pb-8">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.node.images.edges[0].node.url}
                    alt={product.node.images.edges[0].node.altText}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <Link href={product.node.handle ?? ""}>
                    <span className="absolute inset-0" />
                    {product.node.title}
                  </Link>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.node.title}</p> */}
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {formatter.format(
                    parseInt(product.node.priceRange.minVariantPrice.amount)
                  )}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedList;
