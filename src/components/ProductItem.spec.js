import React from "react";
import { shallow, mount } from "enzyme";
import Product from "components/Product";
import ProductItem from "components/ProductItem";

import jsdom from "jsdom";
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.document = doc;
global.window = doc.defaultView;

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  };

  const component = mount(<ProductItem product={product} {...actions} />);

  return {
    component: component,
    actions: actions,
    button: component.find("button"),
    product: component.find(Product)
  };
};

let productProps;

describe("ProductItem component", () => {
  beforeEach(() => {
    productProps = {
      title: "Product 1",
      priceIs: 9.99,
      count: 6
    };
  });

  it("should render product", () => {
    const { product } = setup(productProps);
    expect(product.props()).toEqual({
      title: "Product 1",
      priceIs: 9.99,
      quantity: 6
    });
  });

  it("should render Add To Cart message", () => {
    const { button } = setup(productProps);
    expect(button.text()).toMatch(/^Add to cart/);
  });

  it("should not disable button", () => {
    const { button } = setup(productProps);
    expect(button.prop("disabled")).toEqual(false);
  });

  it("should call action on button click", () => {
    const { button, actions } = setup(productProps);
    button.simulate("click");
    expect(actions.onAddToCartClicked).toBeCalled();
  });

  describe("when product count is 0", () => {
    beforeEach(() => {
      productProps.count = 0;
    });

    it("should render Sold Out message", () => {
      const { button } = setup(productProps);
      expect(button.text()).toMatch(/^Sold Out/);
    });

    it("should disable button", () => {
      const { button } = setup(productProps);
      expect(button.prop("disabled")).toEqual(true);
    });
  });
});
