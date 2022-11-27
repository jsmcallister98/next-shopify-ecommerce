import React from "react";
import ProductCard from "@components/ProductCard";

const HeroProductSection = ({ products }: any) => {
  return (
    <>
      <div className="absolute -bottom-80 left-20 w-80">
        <ProductCard product={products[0]} />
      </div>
      <div className="absolute -bottom-56 left-1/3 w-64">
        <ProductCard product={products[1]} />
      </div>
      <div className="absolute -bottom-40 left-[57%] w-64">
        <ProductCard product={products[2]} />
      </div>
      <div className="absolute -bottom-64 right-20 w-64">
        <ProductCard product={products[3]} />
      </div>
    </>
  );
};

export default HeroProductSection;
