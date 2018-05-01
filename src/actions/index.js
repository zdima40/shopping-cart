import shop from "api";
import * as types from "constants/ActionTypes";

import { getCartProducts, getRenderedProductsLength } from "selectors";

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
    search: text
  });
};

export const fetchProductsGroups = () => async dispatch => {
  const productsGroups = await shop.getProductsGroups();
  dispatch({ type: types.FETCH_PRODUCTS_GROUPS_START });

  try {
    dispatch({
      type: types.FETCH_PRODUCTS_GROUPS_SUCCESS,
      productsGroups
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_PRODUCTS_GROUPS_FAILURE,
      err,
      error: true
    });
  }
};

export const setProductSpecialOffers = id => dispatch => {
  dispatch({
    type: types.GET_ID_PRODUCT_SPECIAL_OFFERS,
    idSpecialOffersProduct: id
  });
};

export const fetchSpecialOffersSettings = () => async dispatch => {
  const timeOut = await shop.getTimeOut();
  dispatch({ type: types.LOAD_SO_SETTINGS_START });

  try {
    dispatch({
      type: types.LOAD_SO_SETTINGS_SUCCESS,
      timeOut: timeOut.timeOut
    });
  } catch (err) {
    dispatch({
      type: types.LOAD_SO_SETTINGS_FAILURE,
      err,
      error: true
    });
  }
};

export const delProduct = id => dispatch => {
  dispatch({
    type: types.DELETE_FROM_CART,
    id
  })
}
