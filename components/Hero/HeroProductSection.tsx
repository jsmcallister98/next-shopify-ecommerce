import React from "react";
import ProductCard from "@components/ProductCard";

const HeroProductSection = ({ products }: any) => {
  return (
    <div className="absolute -bottom-2 hidden h-4 w-full bg-white px-10 md:block">
      <div className="relative left-0 right-0 m-auto h-10 w-full max-w-[95rem]">
        <div className="absolute -bottom-64 left-0 w-1/4 xl:-bottom-80">
          <ProductCard product={products[0]} />
        </div>
        <div className="absolute left-[30%] -bottom-40 w-1/5 xl:-bottom-56">
          <ProductCard product={products[1]} />
        </div>
        <div className="absolute -bottom-24 left-[55%] w-1/5 xl:-bottom-40">
          <ProductCard product={products[2]} />
        </div>
        <div className="absolute -bottom-48 right-0 w-1/5 xl:-bottom-64">
          <ProductCard product={products[3]} />
        </div>
      </div>
    </div>
  );
};

export default HeroProductSection;
