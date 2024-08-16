"use client";

import React from "react";
import { homeData } from "@/utils/homePage";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import PriceFilter from "../filters/priceFilter";
import RemoveFilter from "../filters/removeFilter";
import { useDispatch, useSelector } from "react-redux";
import { CURRENT_CONTENT } from "@/Redux/sidebar/actionTypes";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sidebar() {
  const {
    sidebar: { heading, catArr },
  } = homeData;
  const dispatch = useDispatch();
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  const { currentTab } = useSelector((state: any) => state);

  const handleTabTriggerClick = (value: any) => {
    dispatch({ type: CURRENT_CONTENT, payload: value });
  };

  return (
    <div className="w-full h-fit border-2 text-center font-sans sticky left-0 bottom-0">
      <div className="grid w-full">
        <h1 className="p-5 bg-rose-500 w-full font-semibold text-white">
          {heading}
        </h1>
        <div className="w-full mt-1">
          <TabsList className="w-full">
            {catArr.map((el, i) => (
              <TabsTrigger
                key={i}
                value={el.value}
                className={`block border-b-2 hover:bg-rose-500 hover:text-white p-2 w-full text-left`}
                onClick={() => handleTabTriggerClick(el.value)}
              >
                <input type="checkbox" checked={el.value === currentTab} />
                {el.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <PriceFilter />
      </div>
      <RemoveFilter />
    </div>
  );
}

export default Sidebar;
