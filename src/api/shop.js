/**
 * Mocking client-server processing
 */
import _products from "./products.json";

export default {
  // getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  // buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
  getProducts: async () =>
    new Promise(resolve => {
      setTimeout(() => resolve(_products));
    }),
  loadMoreProductsApi: async ({ offset }) =>
    new Promise(resolve => {
      setTimeout(() => resolve(_products));
    })
  // buyProducts: async (payload, timeout) =>
  //   new Promise(resolve => {
  //     setTimeout(() => resolve(), timeout || TIMEOUT);
  //   })
};
