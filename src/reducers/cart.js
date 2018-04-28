import {
  ADD_TO_CART,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS
} from "constants/ActionTypes";

// Lodash
// import _ from "lodash";

const initialState = {
  addedIds: [],
  quantityById: {}
};

/*
*  Метод изменения состояния "addedIds"
* (массив ids товаров, находящихся в корзине)
*
*  ADD_TO_CART:
*  при добавлении товара в корзину
*  при наличии значения productId
*  возвращает массив с добавленным новым productId
*
*  default: 
*  Возвращает текущее состояние
*/
const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      // return _.concat(state, action.productId);
      return [...state, action.productId];
    default:
      return state;
  }
};

/*
*  Метод изменения состояния "quantityById"
*  
*  ADD_TO_CART:
*  при добавлении товара в корзину
*  увеличивает количество продукта в корзине на 1
*  
*  default: 
*  Возвращает текущее состояние
*/
const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      //return _.merge(state, { [productId]: (state[productId] || 0) + 1 });
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    default:
      return state;
  }
};

/*
*  Метод изменения состояния корзины "initialState"
*  
*  CHECKOUT_REQUEST:
*  Возвращает текущее состояние
*
*  CHECKOUT_SUCCESS:
*  ...
*  
*  CHECKOUT_FAILURE:
*  Возвращает сообщение об ошибке (=> err)
*
*  default: 
*  
*/
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      alert(JSON.stringify(action.products));
      return initialState;
    case CHECKOUT_FAILURE:
      return action.err;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
  }
};

export default cart;
