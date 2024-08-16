import { combineReducers } from "redux";
import { productReducer } from "./products/reducer";
import { singleProductReducer } from "./singleProduct/reducer";
import { sidebarReducer } from "./sidebar/reducer";

export const rootReducer = combineReducers({
  singleProductArr: productReducer,
  productObj: singleProductReducer,
  currentTab: sidebarReducer,
});
