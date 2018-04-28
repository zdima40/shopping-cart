import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  SET_PRODUCTS_VIEW_STYLE_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT,
  FETCH_PRODUCTS_GROUPS_SUCCESS
} from "constants/ActionTypes";

// Lodash
import _ from "lodash";

const initialState = {
  byId: {},
  visibleIds: [],
  theme: 1,
  search: "",
  byIdGroups: {}
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
      return _.merge(state, { count: state.count - 1 });
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
      return _.merge(state, _.keyBy(action.products, "id"));
    case LOAD_MORE_PRODUCTS_SUCCESS:
      return _.merge(state, _.keyBy(action.products, "id"));
    default:
      const { productId } = action;
      if (productId) {
        return _.merge(state, {
          [productId]: product(state[productId], action)
        });
      }
      return state;
  }
};

const search = (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return action.payload;
    default:
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
    case LOAD_MORE_PRODUCTS_SUCCESS:
      const newIds = action.products.map(product => product.id);
      return _.concat(state, newIds);
    default:
      return state;
  }
};

/*
*  Метод изменения состояния "theme"
*
*  SET_PRODUCTS_VIEW_STYLE_SUCCESS:
*  возвращает полученный номер темы (1 или 2)
*  
*  default:
*  Возвращает текущее состояние
*/
const theme = (state = initialState.theme, action) => {
  switch (action.type) {
    case SET_PRODUCTS_VIEW_STYLE_SUCCESS:
      return action.style;
    default:
      return state;
  }
};

/*
*  Метод изменения состояния "byIdGroups"
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
const byIdGroups = (state = initialState.byIdGroups, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_GROUPS_SUCCESS:
      return _.merge(state, _.keyBy(payload, "id"));
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
  theme,
  search,
  byIdGroups
});
