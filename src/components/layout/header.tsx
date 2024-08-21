"use client";

import React, { useState } from "react";
import Image from "next/image";
import EmptyHeart from "@/resources/svg/emptyHeart";
import cartIcon from "@/resources/svg/cartIcon.svg";
import profileIcon from "@/resources/svg/user-round.svg";
import NavSideSheet from "../navSheet/NavSideSheet";
import { homeData } from "@/utils/homePage";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

interface WishlistItem {
  id: number;
  name: string;
  // Add other item properties as needed
}

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  // Add other item properties as needed
}

const Header: React.FC = () => {
  const {
    header: { navLinksArr, Logo },
  } = homeData;

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => [...prev, item]);
  };

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <nav className="h-16 p-2 md:px-10 px-3 flex items-center justify-between bg-gradient-to-b from-rose-200">
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

        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col items-center ">
            <Image src={profileIcon} alt="Profile" width="25" height="25" />
            <span className="text-xs">Profile</span>
          </div>
          <div className="flex flex-col items-center">
            <EmptyHeart
              iconColor={"black"}
              onClick={() =>
                handleAddToWishlist({ id: 1, name: "Sample Item" })
              }
            />
            <span className="text-xs">Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <Sheet>
              <SheetTrigger>
                <Image src={cartIcon} alt="Bag" width="25" height="25" />
              </SheetTrigger>
              <SheetContent>
                <SheetClose />
                <h2>Cart</h2>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} - Quantity: {item.quantity}
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
            <span className="text-xs">Bag</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
