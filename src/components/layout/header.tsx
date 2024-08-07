import React from "react";
import Image from "next/image";
import magnifinGlass from "@/resources/svg/magnifineGlass.svg";
import EmptyHeart from "@/resources/svg/emptyHeart";
import cartIcon from "@/resources/svg/cartIcon.svg";
import NavSideSheet from "../navSheet/NavSideSheet";
import { homeData } from "@/utils/homePage";
import Link from "next/link";

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
            <Link
              key={i}
              href={el.path}
              className="hover:border-b-2 border-rose-400 cursor-pointer"
            >
              {el.link}
            </Link>
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          <NavSideSheet />
        </div>
      </div>
    </nav>
  );
}

export default Header;
