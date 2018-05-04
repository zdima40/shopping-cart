import * as fromCart from "./cartSelectors";
import * as fromProducts from "./productsSelectors";
import * as fromProductPage from "./productPageSelectors";

// Импортированные методы
const getAddedIds = state => fromCart.getAddedIds(state.cart);

export const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);

export const getProduct = (state, id) =>
  fromProducts.getProduct(state.products, id);

export const getCountAddedIds = state => fromCart.getCountAddedIds(state.cart);

export const getVisibleProducts = (ids, state, ownProps) =>
  fromProducts.getVisibleProducts(ids, state.products, ownProps);

export const getRenderedProductsLength = state =>
  fromProducts.getRenderedProductsLength(state.products);

export const getValues = state => fromProducts.getValues(state);

export const getIds = arr => fromProducts.getIds(arr);

export const getActiveGroupId = ownProps =>
  fromProducts.getActiveGroupId(ownProps);

export const getSpecialOffersProducts = state =>
  fromProducts.getSpecialOffersProducts(state.products);

export const getSimilarProducts = (state, id) =>
  fromProductPage.getSimilarProducts(state.products, id);

// export const getSpecialOffersProduct = state =>
//   fromProducts.getSpecialOffersProduct(state.products);

/*
*  Метод суммирования цен товаров умноженных на количество 
*  с округлением до 2-х знаков 
*/

export const getTotal = state =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).priceIs * getQuantity(state, id),
      0
    )
    .toFixed(2);

/*
*  Метод добавления в продкуты (объекты) количества (свойства quantity
*   c указанием количества) 
* 
*  atrubutes: state (ожидается state = state.card)
*/
export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));

// // Получение массива продуктов
// export const getProducts = (state, ids) => ids.map(id => getProduct(state, id));
