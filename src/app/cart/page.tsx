"use client";
import ProductCart from "@/components/products/productCart";
import React from "react";

function Page() {
  const cartArr = localStorage.getItem("cart");
  const cartData = (cartArr && JSON.parse(cartArr)) || [];

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl ">Your Cart Items</h1>
        <div className="grid lg:grid-cols-4  sm:grid-cols-2  md:grid-cols-3  gap-5 p-3">
          {cartData?.map((cartItem: any) => (
            <div key={cartItem.id} className="p-2">
              <ProductCart data={cartItem} isAddedToCart={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
