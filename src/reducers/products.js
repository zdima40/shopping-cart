import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  SET_PRODUCTS_VIEW_STYLE_SECCESS
} from "constants/ActionTypes";

// Lodash
import keyBy from "lodash/keyBy";
import merge from "lodash/merge";

const initialState = {
  byId: {},
  visibleIds: [],
  theme: 1
};

/*
*  Метод изменения состояния "product"
*
*  ADD_TO_CART:
*  Уменьшение количества товара "в наличии"
*  при добавлении товара в корзину
*
*  default: 
*  Возвращает текущее состояние
*/
const product = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return merge(state, { count: state.count - 1 });
    default:
      return state;
  }
};

/*
*  Метод изменения состояния "byId"
*
*  RECEIVE_PRODUCTS:
*  Добавление списка продуктов с ключами
*  значения которых равны значению id 
*  
*  default:
*  Если получено значение productId, то обновляет состояние продуктов "byId",
*  получая новое состояние конкретного продукта методом products()
*  Если значение productId не получено, то возвращает текущее состояние
* 
*/
const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return merge(state, keyBy(action.products, "id"));
    default:
      const { productId } = action;
      if (productId) {
        return merge(state, { [productId]: product(state[productId], action) });
      }
      return state;
  }
};

/*
*  Метод изменения состояния "visibleIds"
*
*  RECEIVE_PRODUCTS:
*  Обновляет состояние "visibleIds", в виде массива значений id продуктов
*  
*  default:
*  Возвращает текущее состояние
*/
const visibleIds = (state = initialState.visibleIds, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    default:
      return state;
  }
};

/*
*  Метод изменения состояния "theme"
*
*  :
*  
*  
*  default:
*  Возвращает текущее состояние
*/
const theme = (state = initialState.theme, action) => {
  switch (action.type) {
    case SET_PRODUCTS_VIEW_STYLE_SECCESS:
      return action.style;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
  theme
});
