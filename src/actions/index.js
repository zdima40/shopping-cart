import shop from "api/shop";
import * as types from "constants/ActionTypes";

import { getCartProducts, getRenderedProductsLength } from "selectors";
import { SEARCH_PHONE } from "../constants/ActionTypes";

export const fetchProducts = () => async dispatch => {
  const products = await shop.getProducts();
  dispatch({
    type: types.RECEIVE_PRODUCTS,
    products
  });
};

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].count > 0) {
    dispatch({
      type: types.ADD_TO_CART,
      productId
    });
  }
};

export const checkout = products => async (dispatch, getState) => {
  // Получить продукты (массив объектов)
  const products = getCartProducts(getState());

  dispatch({
    type: types.CHECKOUT_REQUEST
  });
  //shop.buyProducts(products, () => { });
  try {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      products: products
    });
  } catch (err) {
    dispatch({
      type: types.CHECKOUT_FAILURE,
      err,
      error: true
    });
  }
};

export const setProductsViewStyle = style => dispatch => {
  dispatch({
    type: types.SET_PRODUCTS_VIEW_STYLE_SUCCESS,
    style
  });
};

export const loadMoreProducts = () => async (dispatch, getState) => {
  const offset = getRenderedProductsLength(getState());
  dispatch({
    type: types.LOAD_MORE_PRODUCTS_START
  });

  try {
    const products = await shop.loadMoreProductsApi({ offset });
    dispatch({
      type: types.LOAD_MORE_PRODUCTS_SUCCESS,
      products
    });
  } catch (err) {
    dispatch({
      type: types.LOAD_MORE_PRODUCTS_FAILURE,
      err,
      error: true
    });
  }
};

export const searchProduct = text => dispatch => {
  dispatch({
    type: types.SEARCH_PRODUCT,
    payload: text
  });
};
