import { homeData } from "@/utils/homePage";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

function Sidebar() {
  const {
    sidebar: { heading, catArr },
  } = homeData;
  return (
    <div className="w-full h-[90vh] border-2 text-center font-sans sticky left-0 bottom-0">
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
                className={`block border-b-2 hover:bg-rose-500 hover:text-white p-2 w-full`}
              >
                {el.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
