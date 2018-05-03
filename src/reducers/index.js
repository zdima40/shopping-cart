import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import cart from "./cart";
import products from "./products";
import productPage from "./productPage";

export default combineReducers({
  routing: routerReducer,
  cart,
  products,
  productPage
});
