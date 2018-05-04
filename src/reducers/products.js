import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART_ONE,
  SET_PRODUCTS_VIEW_STYLE_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT,
  FETCH_PRODUCTS_GROUPS_SUCCESS,
  GET_ID_PRODUCT_SPECIAL_OFFERS,
  LOAD_SO_SETTINGS_SUCCESS,
  UPDATE_PRODUCT_COUNT
} from "constants/ActionTypes";

// Lodash
// import keyBy from "lodash/keyBy";

const initialState = {
  byId: {},
  visibleIds: [],
  theme: 1,
  search: "",
  byIdGroups: {},
  idSpecialOffersProduct: 0,
  timeOut: ""
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
    case ADD_TO_CART_ONE:
      //return _.merge(state, { count: state.count - 1 });
      return {
        ...state,
        count: state.count - 1
      };
    // case ADD_TO_CART2:
    //   return {
    //     ...state,
    //     count: state.count - action.count
    //   };
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

// Метод добавления в продукт свойства countApi
const addCountApi = products =>
  products.map(product =>
    Object.assign({}, product, { countApi: product["count"] })
  );

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      //return _.merge(state, _.keyBy(action.products, "id"));
      const productsWithCountApi = addCountApi(action.products);
      return {
        ...state,
        ...productsWithCountApi.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };

    case UPDATE_PRODUCT_COUNT:
      let count;
      for (let k in state) {
        //console.log("LOG:", action.quantityById[k]);
        state[k].count = action.quantityById[k]
          ? state[k].count - action.quantityById[k].count
          : state[k].count;
      }
      return state;

    case LOAD_MORE_PRODUCTS_SUCCESS:
      //return _.merge(state, _.keyBy(action.products, "id"));
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };

    default:
      const { productId } = action;
      if (productId) {
        // return _.merge(state, {
        //   [productId]: product(state[productId], action)
        // });
        return {
          ...state,
          [productId]: product(state[productId], action)
        };
      }
      return state;
  }
};

const search = (state = initialState.search, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return action.search;
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
      return state.concat(newIds);
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
*  FETCH_PRODUCTS_GROUPS_SUCCESS:
*  Добавление списка групп продуктов с ключами
*  значения которых равны значению id 
*  
*  default:возвращает текущее состояние
* 
*/
const byIdGroups = (state = initialState.byIdGroups, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_GROUPS_SUCCESS:
      //return _.merge(state, _.keyBy(payload, "id"));
      return {
        ...state,
        ...action.productsGroups.reduce((obj, group) => {
          obj[group.id] = group;
          return obj;
        }, {})
      };
    default:
      return state;
  }
};
/*
*  Метод изменения состояния "idSpecialOffersProduct"
*
*  GET_ID_PRODUCT_SPECIAL_OFFERS:
*  Добавление значения id выбранного продукта в специальном предложении
*/
const idSpecialOffersProduct = (
  state = initialState.idSpecialOffersProduct,
  action
) => {
  switch (action.type) {
    case GET_ID_PRODUCT_SPECIAL_OFFERS:
      return action.idSpecialOffersProduct;
    default:
      return state;
  }
};

const timeOut = (state = initialState.timeOut, action) => {
  switch (action.type) {
    case LOAD_SO_SETTINGS_SUCCESS:
      return action.timeOut;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
  theme,
  search,
  byIdGroups,
  idSpecialOffersProduct,
  timeOut
});
