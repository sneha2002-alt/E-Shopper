import { CURRENT_CONTENT } from "./actionTypes";

export const sidebarReducer = (state = "", { type, payload }) => {
  switch (type) {
    case CURRENT_CONTENT:
      return payload;
    default:
      return state;
  }
};
