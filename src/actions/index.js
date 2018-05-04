import shop from "api";
import * as types from "constants/ActionTypes";

import {
  getCartProducts,
  getRenderedProductsLength,
  getSimilarProducts
} from "selectors";

export const fetchProducts = () => async (dispatch, getState) => {
  const products = await shop.getProducts();
  dispatch({
    type: types.RECEIVE_PRODUCTS,
    products
  });
  updateProductsCount(dispatch, getState);
};

// Обновление количества товаров с учетов количества, которое уже в корзине
const updateProductsCount = (dispatch, getState) => {
  if (getState().cart.addedIds.length > 0) {
    dispatch({
      type: types.UPDATE_PRODUCT_COUNT,
      quantityById: getState().cart.quantityById
    });
  }
};

export const addToCart = (productId, count) => (dispatch, getState) => {
  if (getState().products.byId[productId].count > 0) {
    if (count) {
      dispatch({
        type: types.ADD_TO_CART_MANY,
        productId,
        count
      });
    } else {
      dispatch({
        type: types.ADD_TO_CART_ONE,
        productId
      });
    }
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
  });
};

export const fetchProductId = id => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: types.ADD_PRODUCT_ID,
    id
  });

  dispatch({
    type: types.ADD_SIMILAR_PRODUCTS,
    arr: getSimilarProducts(state, id)
  });
};
