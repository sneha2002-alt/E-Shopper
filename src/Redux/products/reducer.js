// reducer.ts
import { PRODUCT_ARRAY, FILTERED_PRODUCTS } from "./actionTypes";

const initialState = {
  productArr: [],
  filteredProducts: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ARRAY:
      return {
        ...state,
        productArr: action.payload,
        filteredProducts: action.payload,
      };
    case FILTERED_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
