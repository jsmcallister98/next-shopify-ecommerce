import { formatter } from "@utils/helpers";
import Link from "next/link";
import React from "react";
import { Product } from "productList.types";

interface ProductCardSectionProps {
  products: Product[];
  heading: string;
  link: string;
}

export default function ProductCardSection({
  heading,
  link,
  products,
}: ProductCardSectionProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {heading}
          </h2>
          <Link
            href={link}
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-500 md:block"
          >
            Shop Now
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        {[0, 1, 2].map((i) => (
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products?.slice(0, 4).map((product) => (
              <div key={product.node.id} className="group relative">
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
        ))}

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="#"
            className="font-medium text-slate-600 hover:text-slate-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
