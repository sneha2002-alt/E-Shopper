"use client";

import { store } from "@/Redux/store";
import React from "react";
import { Provider } from "react-redux";

function Wrapper({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

export default Wrapper;
