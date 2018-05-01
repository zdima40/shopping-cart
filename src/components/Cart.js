import React from "react";
import PropTypes from "prop-types";
import Product from "components/Product";

import { connect } from "react-redux";

import { delProduct } from "actions";

// import material-ui
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";

import { ThemeProvider } from "styled-components";
import { themeProduct } from "styles/CartStyle";

import lang from "constants/lang";

// const getIdDelProduct = e => {
//   delProduct(e.target.id);
// };

const Cart = ({ products, total, onCheckoutClicked, delProduct }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <ThemeProvider theme={themeProduct} key={product.id}>
        <Grid container>
          <Grid item xs={8}>
            <Product
              title={product.title}
              priceIs={product.priceIs}
              quantity={product.quantity}
              describe={product.describe}
              img={product.img}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="raised"
              color="secondary"
              //id={product.id}
              onClick={() => delProduct(product.id)}
            >
              Del
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    ))
  ) : (
    <em>{lang.EMPTY_CART}</em>
  );

  const button = (
    <Button
      onClick={onCheckoutClicked}
      variant="raised"
      disabled={hasProducts ? false : true}
    >
      {lang.CHECKOUT_CART}
    </Button>
  );

  return (
    <div>
      <h3>{lang.YOUR_CART}</h3>
      <div>{nodes}</div>
      <p>
        {lang.TOTAL_CART}: &#36;{total}
      </p>
      {button}
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

const mapDispatchToProps = {
  delProduct
};

export default connect(null, mapDispatchToProps)(Cart);
