// import _ from "lodash";

/*
* Метод получения продукта (объекта) из state по значению id
*/
export const getProduct = (state, id) => state.byId[id];

/*
* Метод получения массива продуктов (объектов) по значениям id,
* хранящимся в состоянии "visibleIds"
*/
export const getVisibleProducts = (state, ownProps) => {
  const activeGroupId = getActiveGroupId(ownProps);

  // const myFilterSearch = item => _.filter(item, applySearch);
  // const applySearch = item =>
  //   _.includes(_.toLower(_.get(item, "title")), _.toLower(state.search));

  // const myFilterGroup = item =>
  //   activeGroupId ? _.filter(item, applyGroup) : item;
  // const applyGroup = item => _.eq(activeGroupId, item.group);

  // const products = _.flow([_.map, myFilterGroup, myFilterSearch])(
  //   state.visibleIds,
  //   id => getProduct(state, id)
  // );
  //const products = state.visibleIds.map(id => getProduct(state, id));

  const myFilterSearch = item => item.filter(applySearch);
  const applySearch = item =>
    item.title.toLowerCase().includes(state.search.toLowerCase());

  const myFilterGroup = item =>
    activeGroupId ? item.filter(applyGroup) : item;
  const applyGroup = item => (activeGroupId === item.group ? true : false);

  const products = (arr => {
    const arrProducts = arr.map(id => getProduct(state, id));
    let res = myFilterGroup(arrProducts);
    res = myFilterSearch(res);
    return res;
  })(state.visibleIds);

  return products;
};

export const getRenderedProductsLength = state => state.visibleIds.length;

//export const getGroupsProducts = state => _.values(state.byIdGroups);
export const getValues = state => {
  const arr = [];
  for (var key in state) {
    arr.push(state[key]);
  }
  return arr;
};

export const getIds = arr => {
  const ids = [];
  arr.map(el => {
    ids.push(el["id"]);
  });
  return ids;
};

export const getActiveGroupId = ownProps => {
  //return Number(_.get(ownProps, "params.id"));
  return Number(ownProps.params.id);
};

// Получение массива продуктов со сниженной ценой (priceBefore > 0)
export const getSpecialOffersProducts = state => {
  const arr = [];
  getValues(state.byId).map(product => {
    if (product.priceBefore) arr.push(product);
  });
  return arr;
};
