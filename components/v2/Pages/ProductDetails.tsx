import React, { useContext, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup, Tab } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import RecommendedList from "@components/RecommendedList";
import { ProductDetails as IProductDetails } from "productDetails.types";
import { formatter } from "@utils/helpers";
import { CartContext } from "@context/shopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";
import Carousel from "../Carousel";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface ProductDetailsProps {
  product: IProductDetails;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { data: productInventory } = useSWR(
    `/api/available?id=${product.handle}`,
    fetcher,
    { errorRetryCount: 3 }
  );

  const allVariantOptions = product.variants.edges?.map((variant: any) => {
    const allOptions: any = {};

    variant.node.selectedOptions.map((item: any) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues: any = {};
  product.options.map((item: any) => {
    defaultValues[item.name] = item.values[0];
  });

  const [available, setAvailable] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  const { addToCart } = useContext(CartContext);

  function setOptions(name: any, value: any) {
    setSelectedOptions((prevState: any) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item: any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  type colorType = "Black" | "White" | "Gray" | "Navy";
  const colorMap = {
    Black: "bg-black",
    White: "bg-white",
    Gray: "bg-gray-500",
    Navy: "bg-blue-800",
  };

  const images: any[] = [];

  product.images.edges.map((image: any, i: number) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image src={image.node.url} alt={image.node.altText} fill />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants?.edges.filter(
        (item: { node: { id: any } }) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  return (
    <div className="bg-white">
      <div className="pt-0 pb-16 sm:pb-24 lg:pt-6">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            {/* Image gallery */}
            <div className="mt-4 flex flex-col-reverse lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1">
              <div className="aspect-w-1 aspect-h-1 h-full w-full">
                <div>
                  <Carousel images={product.images.edges} />
                </div>
              </div>
            </div>

            <div className="mt-8 xs:mt-10 lg:col-span-5 lg:mt-4">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-900">
                    {product.title}
                  </h1>
                  <p className="text-xl font-medium text-gray-900">
                    {formatter.format(
                      parseInt(product.variants.edges[0].node.priceV2.amount)
                    )}
                  </p>
                </div>
              </div>
              <form>
                {/* Color picker */}
                <div className="mt-8">
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  <RadioGroup
                    value={selectedOptions.Color}
                    onChange={(color) => {
                      setOptions("Color", color);
                    }}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Choose a color{" "}
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.options
                        .filter((item: any) => item.name === "Color")[0]
                        .values.map((color: string) => (
                          <RadioGroup.Option
                            key={color}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                colorMap[color as colorType],
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {" "}
                              {color}{" "}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="text-sm font-medium text-slate-600 hover:text-slate-500"
                    >
                      See sizing chart
                    </button>
                  </div>

                  <RadioGroup
                    value={selectedOptions.Size}
                    onChange={(size) => {
                      setOptions("Size", size);
                    }}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      {" "}
                      Choose a size{" "}
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.options
                        .filter((item: any) => item.name === "Size")[0]
                        .values.map((size) => (
                          <RadioGroup.Option
                            key={size}
                            value={size}
                            className={({ active, checked }) =>
                              classNames(
                                size
                                  ? "cursor-pointer focus:outline-none"
                                  : "cursor-not-allowed opacity-25",
                                active
                                  ? "ring-2 ring-slate-500 ring-offset-2"
                                  : "",
                                checked
                                  ? "border-transparent bg-slate-600 text-white hover:bg-slate-700"
                                  : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                                "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                              )
                            }
                            disabled={!size}
                          >
                            <RadioGroup.Label as="span">
                              {size}
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                    </div>
                  </RadioGroup>
                </div>

                {available ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(selectedVariant);
                    }}
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 py-3 px-8 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-8 flex w-full cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-slate-300 py-3 px-8 text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  >
                    Out of Stock
                  </button>
                )}
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-b border-gray-200 py-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>

                {/* <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div> */}
                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul role="list">
                    <li>Only the best materials</li>
                    <li>Ethically and locally made</li>
                    <li>Pre-washed and pre-shrunk</li>
                    <li>Machine wash cold with similar colors</li>
                  </ul>
                </div>
              </div>

              {/* Policies */}
              {/* <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-4 flex w-11/12 max-w-3xl items-center md:space-x-4 lg:space-x-8">
        <div>
          <img src="/images/golfer.svg" alt="golfer icon" />
        </div>
        <p className="text-center ">{product.description}</p>
      </div>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
