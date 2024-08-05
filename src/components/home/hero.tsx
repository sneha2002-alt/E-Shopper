import { homeData } from "@/utils/homePage";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import ShowProducts from "../products/showProducts";
import MainHero from "./mainHero";
import { productData } from "@/utils/data";
import { IProductCollection } from "@/types";

type HeroTabs = keyof IProductCollection | "mainHero";

function Hero() {
  const {
    heroSection: { heroSectionTabsValuesArr },
  } = homeData;

  const validTabsValuesArr = heroSectionTabsValuesArr as HeroTabs[];

  return (
    <section className="w-3/4 p-5 max-h-[90vh] overflow-scroll">
      {validTabsValuesArr.map((value) => (
        <TabsContent key={value} value={value}>
          {value === "mainHero" ? (
            <MainHero />
          ) : (
            <ShowProducts
              dataVal={value}
              productArr={productData[value as keyof IProductCollection]}
            />
          )}
        </TabsContent>
      ))}
    </section>
  );
}

export default Hero;
