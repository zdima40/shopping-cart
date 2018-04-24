import _ from "lodash";

/*
* Метод получения продукта (объекта) из state по значению id
*/
export const getProduct = (state, id) => state.byId[id];

/*
* Метод получения массива продуктов (объектов) по значениям id,
* хранящимся в состоянии "visibleIds"
*/
export const getVisibleProducts = state => {
  const applySearch = item => _.includes(_.get(item, "title"), state.search);

  const myFilter = item => _.filter(item, applySearch);

  const products = _.flow([_.map, myFilter])(state.visibleIds, id =>
    getProduct(state, id)
  );
  //const products = state.visibleIds.map(id => getProduct(state, id));

  console.log("products", products);
  return products;
};

export const getRenderedProductsLength = state => state.visibleIds.length;
