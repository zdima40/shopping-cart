import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

// import material-ui
import Button from "material-ui/Button";

import { ThemeProvider } from "styled-components";
import { themeProduct } from "styles/CartStyle";

import lang from "constants/lang";

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <ThemeProvider theme={themeProduct} key={product.id}>
        <Product
          title={product.title}
          priceIs={product.priceIs}
          quantity={product.quantity}
          describe={product.describe}
        />
      </ThemeProvider>
    ))
  ) : (
    <em>{lang.EMPTY_CART}</em>
  );

  return (
    <div>
      <h3>{lang.YOUR_CART}</h3>
      <div>{nodes}</div>
      <p>
        {lang.TOTAL_CART}: &#36;{total}
      </p>
      <Button
        onClick={onCheckoutClicked}
        variant="raised"
        disabled={hasProducts ? false : true}
      >
        {lang.CHECKOUT_CART}
      </Button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
