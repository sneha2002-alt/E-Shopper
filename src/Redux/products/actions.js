// actions.ts
import { FILTERED_PRODUCTS } from "./actionTypes";

export const setFilteredProducts = (products) => ({
  type: FILTERED_PRODUCTS,
  payload: products,
});
