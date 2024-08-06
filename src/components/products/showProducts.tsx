"use client";

import React, { useEffect, useState } from "react";
import { IProduct } from "@/types";
import ProductCart from "./productCart";

interface ShowProductsProps {
  dataVal: string;
  productArr: IProduct[];
}

type FilterOption = "low" | "high";

const ShowProducts: React.FC<ShowProductsProps> = ({ dataVal, productArr }) => {
  const [filter, setFilter] = useState<FilterOption | "">("");

  // Function to filter and sort products based on selected filter
  const filteredProducts = () => {
    if (filter === "low") {
      return [...productArr].sort((a, b) => a.price - b.price);
    } else if (filter === "high") {
      return [...productArr].sort((a, b) => b.price - a.price);
    }
    return productArr;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as FilterOption);
  };
  const sortedProducts = filteredProducts();

  useEffect(() => {}, [filter]);

  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <h1 className="text-5xl font-semibold">{dataVal.toUpperCase()}</h1>
        <select
          className="p-3 px-2 cursor-pointer bg-rose-500 text-white w-1/5"
          onChange={handleChange}
          value={filter}
        >
          <option value="">Filter with Price</option>
          <option value="low">low to high</option>
          <option value="high">high to low</option>
        </select>
      </div>
      <div className="my-5">
        <div className="grid grid-cols-3 gap-5">
          {sortedProducts && sortedProducts.length > 0 ? (
            sortedProducts.map((el) => <ProductCart key={el.id} data={el} />)
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
