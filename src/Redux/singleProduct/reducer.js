import { REMOVE_SINGLE_DATA, SET_SINGLE_DATA } from "./actionTypes";

export const singleProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_SINGLE_DATA:
      return payload;
    case REMOVE_SINGLE_DATA:
      return {};
    default:
      return state;
  }
};
