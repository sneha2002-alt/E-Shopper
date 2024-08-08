"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import usePagination from "@/customHooks/usePagination";
import { FILTERED_PRODUCTS, PRODUCT_ARRAY } from "@/Redux/products/actionTypes";
import SearchProduct from "./searchProduct";
import ProductCart from "./productCart";
import { XIcon } from "lucide-react";
import { REMOVE_SINGLE_DATA } from "@/Redux/singleProduct/actionTypes";

interface ShowProductsProps {
  dataVal: string;
  productArr: any[];
}

const ShowProducts: React.FC<ShowProductsProps> = ({ dataVal, productArr }) => {
  const itemsPerPage = 6;

  const filteredProducts = useSelector(
    (state: any) => state.singleProductArr.filteredProducts || []
  );
  const objData = useSelector((state: any) => state.productObj || {});

  const { currentPage, totalPages, currentItems, handlePageChange } =
    usePagination(filteredProducts, itemsPerPage);

  const dispatch = useDispatch();

  const removeSearchedData = () => {
    dispatch({ type: REMOVE_SINGLE_DATA });
  };

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
        <SearchProduct productArray={productArr} />
      </div>
      <div className="my-10">
        {objData.title && (
          <div className="w-1/2 border-2 border-rose-500 pt-2">
            <div className="flex justify-between px-10 items-center bg-white">
              <h1 className=" text-center text-3xl font-semibold text-rose-600">
                Your Searched Result
              </h1>
              <div onClick={removeSearchedData} className="cursor-pointer">
                <XIcon />
              </div>
            </div>
            <ProductCart data={objData} />
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
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
