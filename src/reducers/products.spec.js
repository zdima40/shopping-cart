import * as products from "selectors/productsSelectors";
import reducer from "reducers/products";

describe("reducers", () => {
  describe("products", () => {
    let state;

    describe("when products are received", () => {
      beforeEach(() => {
        state = reducer(
          {},
          {
            type: "RECEIVE_PRODUCTS",
            products: [
              {
                id: 1,
                title: "Product 1",
                count: 2
              },
              {
                id: 2,
                title: "Product 2",
                count: 1
              }
            ]
          }
        );
      });

      it("contains the products from the action", () => {
        expect(products.getProduct(state, 1)).toEqual({
          id: 1,
          title: "Product 1",
          count: 2
        });
        expect(products.getProduct(state, 2)).toEqual({
          id: 2,
          title: "Product 2",
          count: 1
        });
      });

      it("contains no other products", () => {
        expect(products.getProduct(state, 3)).toEqual(undefined);
      });

      it("lists all of the products as visible", () => {
        expect(products.getVisibleProducts(state)).toEqual([
          {
            id: 1,
            title: "Product 1",
            count: 2
          },
          {
            id: 2,
            title: "Product 2",
            count: 1
          }
        ]);
      });

      describe("when an item is added to the cart", () => {
        beforeEach(() => {
          state = reducer(state, { type: "ADD_TO_CART", productId: 1 });
        });

        it("the count is reduced", () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: "Product 1",
              count: 1
            },
            {
              id: 2,
              title: "Product 2",
              count: 1
            }
          ]);
        });
      });
    });
  });
});
