import { useState } from "react";
import React from "react";
import { Product } from "productList.types";
import Link from "next/link";
import { formatter } from "@utils/helpers";
import Nav from "../Nav";
import Image from "next/image";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals", checked: false },
      { value: "tees", label: "Tees", checked: false },
      { value: "objects", label: "Objects", checked: true },
      { value: "sweatshirts", label: "Sweatshirts", checked: false },
      { value: "pants-shorts", label: "Pants & Shorts", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "slate", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS", checked: false },
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
      { value: "xl", label: "XL", checked: false },
      { value: "2xl", label: "2XL", checked: false },
    ],
  },
];
const activeFilters = [{ value: "objects", label: "Objects" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface CategoryProps {
  products: Product[];
}

export default function Category({ products }: CategoryProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            layout="fill"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        <Nav />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-48 px-6 text-center lg:px-0">
          <h1 className="text-4xl tracking-wide text-white lg:text-6xl">
            {"Hoodies"}
          </h1>
        </div>
      </div>
      <div>
        <main>
          {/* Product grid */}
          <section
            aria-labelledby="products-heading"
            className="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products?.map((product) => (
                <Link
                  key={product.node.id}
                  href={`/products/${product.node.handle}`}
                  className="group"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.node.images.edges[0].node.url}
                      alt={product.node.images.edges[0].node.altText}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.node.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {formatter.format(
                      parseInt(product.node.priceRange.minVariantPrice.amount)
                    )}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
