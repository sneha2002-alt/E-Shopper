import { productData } from "@/utils/data";
import React from "react";
import ThreeCardSection from "../products/threeCardSection";

function Product() {
  const {
    jackets,
    sportswear,
    shoes,
    accessories,
    makeup,
    dresses,
    shirts,
    tshirts,
    jeans,
    swimwear,
  } = productData;

  const products = [
    jackets,
    sportswear,
    shoes,
    accessories,
    makeup,
    dresses,
    shirts,
    tshirts,
    jeans,
    swimwear,
  ];
  return (
    <div>
      <div>
        <h1 className="text-5xl font-semibold border-b-2 border-b-rose-500 ">
          All Products
        </h1>
        <div>
          {products.map((product, i) => (
            <ThreeCardSection data={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
