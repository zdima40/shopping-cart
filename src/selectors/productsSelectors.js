/*
* Метод получения продукта (объекта) из state по значению id
*/
export const getProduct = (state, id) =>
  state.byId[id]

/*
* Метод получения массива продуктов (объектов) по значениям id,
* хранящимся в состоянии "visibleIds"
*/
export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))