import shop from "api/shop";
import * as types from "constants/ActionTypes";

import { getCartProducts } from "selectors";

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const fetchProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products));
  });
};

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].count > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const checkout = products => (dispatch, getState) => {
  // Получить продукты (массив объектов)
  const products = getCartProducts(getState());

  dispatch({
    type: types.CHECKOUT_REQUEST
  });
  shop.buyProducts(products, () => {
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
  });
};

export const setProductsViewStyle = style => dispatch => {
  try {
    dispatch({
      type: types.SET_PRODUCTS_VIEW_STYLE_SECCESS,
      style
    });
  } catch (err) {
    dispatch({
      type: "SET_PRODUCTS_VIEW_STYLE__FAILURE",
      err,
      error: true
    });
  }
};
