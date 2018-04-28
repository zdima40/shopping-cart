import _ from "lodash";

/*
* Метод получения продукта (объекта) из state по значению id
*/
export const getProduct = (state, id) => state.byId[id];

/*
* Метод получения массива продуктов (объектов) по значениям id,
* хранящимся в состоянии "visibleIds"
*/
export const getVisibleProducts = (state, ownProps) => {
  //console.log("ownProps", ownProps);
  const activeGroupId = getActiveGroupId(ownProps);

  const myFilter = item => _.filter(item, applySearch);
  const applySearch = item => _.includes(_.get(item, "title"), state.search);

  const myFilterGroup = item =>
    activeGroupId ? _.filter(item, applyGroup) : _.filter(item, applySearch);
  const applyGroup = item => {
    var r = _.eq(activeGroupId, item.group);
    console.log("applyGroup", r, activeGroupId, " ", item.group);
    return _.eq(activeGroupId, item.group);
  };

  const products = _.flow([_.map, myFilterGroup, myFilter])(
    state.visibleIds,
    id => getProduct(state, id)
  );
  //const products = state.visibleIds.map(id => getProduct(state, id));

  console.log("products", products);
  return products;
};

export const getRenderedProductsLength = state => state.visibleIds.length;

export const getGroupsProducts = state => _.values(state.byIdGroups);

export const getActiveGroupId = ownProps => {
  return Number(_.get(ownProps, "params.id"));
};
