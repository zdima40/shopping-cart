/**
 * Mocking client-server processing
 */
import products from "./products.json";
import groups from "./groups.json";
import timeOut from "./specialOfferSettings.json";

export default {
  getProducts: async () =>
    new Promise(resolve => {
      resolve(products);
    }),
  loadMoreProductsApi: async ({ offset }) =>
    new Promise(resolve => {
      resolve(products);
    }),
  getProductsGroups: async () =>
    new Promise(resolve => {
      resolve(groups);
    }),
  getTimeOut: async () =>
    new Promise(resolve => {
      resolve(timeOut);
    })
};
// getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
// buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// buyProducts: async (payload, timeout) =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(), timeout || TIMEOUT);
//   })
