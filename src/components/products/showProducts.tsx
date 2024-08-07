// ShowProducts.tsx
"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCart from "./productCart";
import usePagination from "@/customHooks/usePagination";
import { FILTERED_PRODUCTS, PRODUCT_ARRAY } from "@/Redux/products/actionTypes";
import Image from "next/image";
import magnifinGlass from "@/resources/svg/magnifineGlass.svg";

interface ShowProductsProps {
  dataVal: string;
  productArr: any[];
}

const ShowProducts: React.FC<ShowProductsProps> = ({ dataVal, productArr }) => {
  const itemsPerPage = 6;
  const { filteredProducts } = useSelector(
    (state: any) => state.singleProductArr
  );

  const { currentPage, totalPages, currentItems, handlePageChange } =
    usePagination(filteredProducts, itemsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PRODUCT_ARRAY, payload: productArr });
    dispatch({ type: FILTERED_PRODUCTS, payload: productArr });
    const section = document.getElementById("up");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [dispatch, productArr]);

  return (
    <div className="w-full" id="up">
      <div className="md:flex justify-between w-full">
        <h1 className="text-3xl md:text-5xl font-semibold">
          {dataVal.toUpperCase()}
        </h1>
        <div className="hidden md:flex items-center  border-4 border-rose-400 p-2 px-3  md:gap-3 lg:gap-5 rounded-full w-1/2">
          <div>
            <Image
              src={magnifinGlass}
              width="30"
              height="30"
              alt="magnifinGlass"
            />
          </div>
          <input
            className=" w-full outline-none bg-transparent"
            placeholder="search..."
            type="text"
          />
        </div>
      </div>
      <div className="my-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((el: any) => <ProductCart key={el.id} data={el} />)
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
