import React from "react";

function ProductCart({ data }: any) {
  return (
    <div className="grid gap-3 border-2 justify-center w-full p-5">
      <div className="h-24 w-24 bg-slate-400"></div>
      <div>
        <h1>{data.title}</h1>
        <h2>Price: {data.price}</h2>
        <h3>{data.description}</h3>
      </div>
    </div>
  );
}

export default ProductCart;
