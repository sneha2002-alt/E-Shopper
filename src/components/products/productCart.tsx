import Image from "next/image";
import React from "react";

function ProductCart({ data }: any) {
  return (
    <div className="grid gap-3 border-2 justify-center w-full p-5">
      <div className="w-full h-[500px]">
        <Image
          src={data.image}
          alt={data.title}
          width="500"
          height="500"
          className="object-cover"
        />
      </div>
      <div>
        <h1>{data.title}</h1>
        <h2>Price: {data.price}</h2>
        <h3>{data.description}</h3>
      </div>
    </div>
  );
}

export default ProductCart;
