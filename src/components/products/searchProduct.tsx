"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import magnifinGlass from "@/resources/svg/magnifineGlass.svg";
import { XIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { SET_SINGLE_DATA } from "@/Redux/singleProduct/actionTypes";

interface SearchProductProps {
  productArray: any[];
}

function SearchProduct({ productArray }: SearchProductProps) {
  const [filteredProducts, setFilteredProducts] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const searchedResult = (searchTerm: string) => {
    const filtered = productArray.filter((dataObj) =>
      dataObj.title.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    setInput(searchTerm);
  };
  useEffect(() => {
    searchedResult(input);
  }, [filteredProducts]);

  const removeSearch = () => {
    setInput("");
    setFilteredProducts([]);
  };

  const setSearchedResult = (data: string) => {
    dispatch({ type: SET_SINGLE_DATA, payload: data });
  };

  return (
    <div className="hidden md:flex items-center  border-4 border-rose-400 p-2 px-3  md:gap-3 lg:gap-5 rounded-full w-1/2">
      <div>
        <Image src={magnifinGlass} width="30" height="30" alt="magnifinGlass" />
      </div>
      <div className="relative w-full">
        <input
          className="w-full outline-none bg-transparent"
          placeholder="search..."
          type="text"
          value={input}
          onChange={handleChange}
        />
        {filteredProducts.length > 0 && input && (
          <div className="absolute bg-rose-200 w-full h-fit max-h-[250px] overflow-y-auto mt-5 border-y-2 border-rose-500">
            {filteredProducts?.map((el: any) => (
              <div
                key={el.id}
                className="p-3 w-full border-rose-500 border-b-2 hover:bg-rose-500 cursor-pointer hover:text-white"
                onClick={() => setSearchedResult(el)}
              >
                {el.title}
              </div>
            ))}
          </div>
        )}
      </div>
      {input && (
        <div
          className="hover:bg-rose-500 p-1 hover:text-white cursor-pointer rounded-full"
          onClick={removeSearch}
        >
          <XIcon />
        </div>
      )}
    </div>
  );
}

export default SearchProduct;
