import React from "react";
import { shallow } from "enzyme";
import Cart from "components/Cart";
import Product from "components/Product";
import Button from "material-ui/Button";

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn()
  };

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  );

  return {
    component: component,
    actions: actions,
    button: component.find(Button),
    products: component.find(Product),
    em: component.find("em"),
    p: component.find("p")
  };
};

describe("Cart component", () => {
  it("should display total", () => {
    const { p } = setup("76");
    expect(p.text()).toMatch(/^Total: \$76/);
    //const pattern = lang.TOTAL_CART + ": $76";
    //expect(p.text()).toMatch(pattern);
  });

  it("should display add some products message", () => {
    const { em } = setup();
    //const pattern = lang.EMPTY_CART;
    expect(em.text()).toMatch(/^Cart is empty!/);
  });

  it("should disable button", () => {
    const { button } = setup();
    expect(button.prop("disabled")).toEqual(true);
  });

  describe("when given product", () => {
    const product = [
      {
        id: 1,
        title: "Product 1",
        priceIs: 9.99,
        quantity: 1
      }
    ];

    it("should render products", () => {
      const { products } = setup("9.99", product);
      const props = {
        title: product[0].title,
        priceIs: product[0].priceIs,
        quantity: product[0].quantity
      };

      expect(products.at(0).props()).toEqual(props);
    });

    it("should not disable button", () => {
      const { button } = setup("9.99", product);
      expect(button.prop("disabled")).toEqual(false);
    });

    it("should call action on button click", () => {
      const { button, actions } = setup("9.99", product);
      button.simulate("click");
      expect(actions.onCheckoutClicked).toBeCalled();
    });
  });
});
