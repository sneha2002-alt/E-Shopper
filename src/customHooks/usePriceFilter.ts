// usePriceFilter.ts
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilteredProducts } from "@/Redux/products/actions";
import { IProduct } from "@/types";

type FilterOption = "low" | "high" | "";

const usePriceFilter = (products: IProduct[]) => {
  const [filter, setFilter] = useState<FilterOption>("");
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as FilterOption);
  };

  useEffect(() => {
    const filteredProducts = () => {
      if (filter === "low") {
        return [...products].sort((a, b) => a.price - b.price);
      } else if (filter === "high") {
        return [...products].sort((a, b) => b.price - a.price);
      }
      return products;
    };

    dispatch(setFilteredProducts(filteredProducts()));
  }, [filter, products, dispatch]);

  return {
    filter,
    handleFilterChange,
  };
};

export default usePriceFilter;
