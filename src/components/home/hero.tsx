"use client";

import { homeData } from "@/utils/homePage";
import { TabsContent } from "@radix-ui/react-tabs";
import React, { useEffect } from "react";
import ShowProducts from "../products/showProducts";
import { productData } from "@/utils/data";
import { IProductCollection } from "@/types";
import Product from "./product";
import { useSelector } from "react-redux";

type HeroTabs = keyof IProductCollection | "mainHero";

function Hero() {
  const {
    heroSection: { heroSectionTabsValuesArr },
  } = homeData;

  const validTabsValuesArr = heroSectionTabsValuesArr as HeroTabs[];

  const { currentTab } = useSelector((state: any) => state);

  return (
    <section className="w-3/4 p-5 bg-rose-100 max-h-[90vh] overflow-scroll border-2">
      {validTabsValuesArr.map((value) => (
        <TabsContent key={value} value={value}>
          {value === "mainHero" ? (
            <Product />
          ) : (
            <ShowProducts
              dataVal={currentTab ? currentTab : value}
              productArr={productData[value as keyof IProductCollection]}
            />
          )}
        </TabsContent>
      ))}
    </section>
  );
}

export default Hero;
