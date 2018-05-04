import { ADD_PRODUCT_ID, ADD_SIMILAR_PRODUCTS } from "constants/ActionTypes";

const initialState = {
  id: null,
  similarProducts: []
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
    default:
      return state;
  }
};

export default productPage;
