"use client";

import React from "react";
import { Button } from "../ui/button";

function RemoveFilter() {
  const clearFilter = () => {
    window.location.reload();
  };
  return (
    <div className="my-5">
      <Button onClick={clearFilter}>Clear Filter</Button>
    </div>
  );
}

export default RemoveFilter;
