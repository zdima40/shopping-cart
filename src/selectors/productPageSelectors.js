export const getSimilarProducts = (state, id) => {
  const product = state.byId[id];

  if (!product) return [];

  const group = product.group;

  const products = state.byId;
  id = +id;

  const arr = [];

  for (let k1 in products) {
    if (products[k1].group === group && products[k1].id !== id) {
      arr.push(products[k1].id);
    }
  }
  return arr;
};
