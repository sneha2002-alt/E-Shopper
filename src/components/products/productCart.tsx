"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function ProductCart({ data, isAddedToCart = false }: any) {
  const router = useRouter();
  const cartArr = localStorage.getItem("cart");
  const cartData = (cartArr && JSON.parse(cartArr)) || [];

  const handleAddToCart = () => {
    const updatedCartData = [...cartData, data];

    cartData.push(data);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    router.push("/cart");
  };

  const removeFromCart = () => {
    const updatedCartData = cartData.filter((el: any) => el.id !== data.id);
    console.log("updatedCartData: ", updatedCartData);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    window.location.reload();
  };

  return (
    <div className="grid min-h-[450px] max-fit gap-3 shadow-lg shadow-rose-300 border-rose-500 justify-center w-full p-5">
      <div className="w-full h-fit">
        <Image
          src={data.image}
          alt={data.title}
          width="500"
          height="500"
          className="h-56 w-full object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl">{data.title}</h1>
        <h2>Price: ${data.price}</h2>
        <h3>{data.description}</h3>
      </div>
      {isAddedToCart ? (
        <Button onClick={removeFromCart}>Remove from Cart</Button>
      ) : (
        <Button onClick={handleAddToCart}>Add to cart</Button>
      )}
    </div>
  );
}

export default ProductCart;
