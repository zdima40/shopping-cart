/**
 * Mocking client-server processing
 */
import products from "./products.json";
import groups from "./groups.json";

export default {
  getProducts: async () =>
    new Promise(resolve => {
      resolve(products);
    }),
  loadMoreProductsApi: async ({ offset }) =>
    new Promise(resolve => {
      resolve(products);
    }),
  getGroups: async () =>
    new Promise(resolve => {
      resolve(groups);
    })
};
// getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
// buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
// buyProducts: async (payload, timeout) =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(), timeout || TIMEOUT);
//   })
