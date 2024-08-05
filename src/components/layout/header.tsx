import React from "react";
import Image from "next/image";
import magnifinGlass from "@/resources/svg/magnifineGlass.svg";
import EmptyHeart from "@/resources/svg/emptyHeart";
import cartIcon from "@/resources/svg/cartIcon.svg";
import NavSideSheet from "../navSheet/NavSideSheet";
import { homeData } from "@/utils/homePage";

function Header() {
  const {
    header: { navLinksArr, Logo },
  } = homeData;

  return (
    <nav className="h-16 p-2 md:px-10 px-3 flex items-center justify-between">
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="font-bebas text-3xl">{Logo}</h1>
        </div>

        <ul className="hidden md:flex md:gap-5 lg:gap-10 text-sm items-center">
          {navLinksArr.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center  border-4 p-2 px-3  md:gap-3 lg:gap-5 rounded-full w-3/4">
            <div>
              <Image
                src={magnifinGlass}
                width="30"
                height="30"
                alt="magnifinGlass"
              />
            </div>
            <input
              className=" w-full outline-none text-zinc-400"
              placeholder="search..."
              type="text"
            />
          </div>
          <div className="hidden md:flex justify-between items-cente gap-3">
            <div>
              <EmptyHeart iconColor={"black"} />
            </div>
            <div>
              <Image src={cartIcon} alt="cartIcon" width="25" height="25" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <NavSideSheet />
        </div>
      </div>
    </nav>
  );
}

export default Header;
