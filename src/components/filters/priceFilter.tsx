// PriceFilter.tsx
"use client";
import React from "react";
import { useSelector } from "react-redux";
import usePriceFilter from "@/customHooks/usePriceFilter";

const PriceFilter: React.FC = () => {
  const { productArr } = useSelector((state: any) => state.singleProductArr);

  const { filter, handleFilterChange } = usePriceFilter(productArr);

  return (
    <div>
      <select
        className="lg:p-3 lg:px-2 cursor-pointer bg-rose-500 text-white w-full p-2"
        onChange={handleFilterChange}
        value={filter}
      >
        <option value="">Filter with Price</option>
        <option value="low">low to high</option>
        <option value="high">high to low</option>
      </select>
    </div>
  );
};

export default PriceFilter;
