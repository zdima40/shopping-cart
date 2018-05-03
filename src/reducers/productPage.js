import { ADD_PRODUCT_ID } from "constants/ActionTypes";

const initialState = {
  id: null
};

const productPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ID:
      return { id: action.id };
    default:
      return state;
  }
};

export default productPage;
