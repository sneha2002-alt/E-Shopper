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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Calculate total pages => 15/6=> 3
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Get products for the current page => slice(12,18)
  // 3-1 = 2*6=12,2*6=12
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const section = document.getElementById("up");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // window.scrollTo(0, 0);
  }, [filter, currentPage]);

  return (
    <div className="w-full" id="up">
      <div className="md:flex justify-between w-full">
        <h1 className="text-3xl md:text-5xl font-semibold">
          {dataVal.toUpperCase()}
        </h1>
        <select
          className="lg:p-3 lg:px-2 cursor-pointer bg-rose-500 text-white lg:w-1/5 md:w-1/3 w-full p-2"
          onChange={handleChange}
          value={filter}
        >
          <option value="">Filter with Price</option>
          <option value="low">low to high</option>
          <option value="high">high to low</option>
        </select>
      </div>
      <div className="my-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedProducts && paginatedProducts.length > 0 ? (
            paginatedProducts.map((el) => <ProductCart key={el.id} data={el} />)
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
      <div className="flex justify-center my-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-rose-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
