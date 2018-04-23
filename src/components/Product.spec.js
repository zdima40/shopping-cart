import React from "react";
import { shallow } from "enzyme";
import Product from "components/Product";

const setup = props => {
  const component = shallow(<Product {...props} />);

  return {
    component: component
  };
};

describe("Product component", () => {
  it("should render title and priceIs", () => {
    const { component } = setup({ title: "Test Product", priceIs: 9.99 });
    expect(component.text()).toBe("Test Product - $9.99");
  });

  describe("when given count", () => {
    it("should render title, priceIs, and count", () => {
      const { component } = setup({
        title: "Test Product",
        priceIs: 9.99,
        quantity: 6
      });
      expect(component.text()).toBe("Test Product - $9.99 x 6");
    });
  });
});
