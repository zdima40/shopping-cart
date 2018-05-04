import {
  ADD_PRODUCT_ID,
  ADD_SIMILAR_PRODUCTS,
  FETCH_COUPON_SUCCESS
} from "constants/ActionTypes";

const initialState = {
  id: null,
  similarProducts: [],
  discount: 0
};

const productPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ID:
      return {
        ...state,
        id: action.id
      };
    case ADD_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.arr
      };
    case FETCH_COUPON_SUCCESS:
      return {
        ...state,
        discount: action.coupon.discount
      };
    default:
      return state;
  }
};

export default productPage;
