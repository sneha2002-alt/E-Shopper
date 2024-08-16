"use client";
import React from "react";
import ProductCart from "./productCart";
import { Button } from "../ui/button";
import { TabsTrigger } from "../ui/tabs";
import { CURRENT_CONTENT } from "@/Redux/sidebar/actionTypes";
import { useDispatch } from "react-redux";
import { IProduct } from "@/types"; // Adjust the import path as needed

interface ThreeCardSectionProps {
  data: IProduct[];
}

const ThreeCardSection: React.FC<ThreeCardSectionProps> = ({ data }) => {
  const dispatch = useDispatch();

  const handleTabTriggerClick = (value: string) => {
    dispatch({ type: CURRENT_CONTENT, payload: value });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold my-5">{data[0].category}</h1>

        <Button
          onClick={() => handleTabTriggerClick(data[0].category.toLowerCase())}
        >
          More...
        </Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {data.slice(0, 3).map((item) => (
          <div key={item.id}>
            <ProductCart data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCardSection;
