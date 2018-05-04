import React from "react";
import PropTypes from "prop-types";
import Product from "components/Product";

import { connect } from "react-redux";

import { delProduct, addToCart } from "actions";

import { getQuantity } from "selectors";

// import material-ui
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

import { ThemeProvider } from "styled-components";
import { themeProduct } from "styles/CartStyle";

import lang from "constants/lang";

class Cart extends React.Component {
  handleChange(e) {
    const id = Number(e.target.id);
    let newCount = Number(e.target.value);
    const productCountApi = this.props.productsObj[id].countApi;
    // Проверка на превышение доступного количества
    newCount = newCount > productCountApi ? productCountApi : newCount;
    this.props.addToCart(id, newCount);
  }

  rendNodes() {
    const { products, delProduct, state } = this.props;

    this.hasProducts = products.length > 0;
    const nodes = this.hasProducts ? (
      products.map(product => {
        const productCount = getQuantity(state, product.id);

        return (
          <ThemeProvider theme={themeProduct} key={product.id}>
            <Grid container>
              <Grid item xs={6}>
                <Product
                  title={product.title}
                  priceIs={product.priceIs}
                  describe={product.describe}
                  img={product.img}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  value={productCount}
                  label="Count"
                  type="number"
                  inputProps={{ id: product.id }}
                  onChange={
                    product.count > 0 ? this.handleChange.bind(this) : undefined
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="raised"
                  color="secondary"
                  onClick={() => delProduct(product.id)}
                >
                  {lang.DELETE_CART}
                </Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        );
      })
    ) : (
      <em>{lang.EMPTY_CART}</em>
    );

    return nodes;
  }

  rendButton() {
    const { onCheckoutClicked } = this.props;
    return (
      <div>
        <Button
          onClick={onCheckoutClicked}
          variant="raised"
          disabled={this.hasProducts ? false : true}
        >
          {lang.CHECKOUT_CART}
        </Button>
      </div>
    );
  }

  render() {
    const { total } = this.props;
    return (
      <div>
        <h3>{lang.YOUR_CART}</h3>
        <div>{this.rendNodes()}</div>
        <p>
          {lang.TOTAL_CART}: &#36;{total}
        </p>
        {this.rendButton()}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  delProduct: PropTypes.func
};

const mapStateToProps = state => ({
  state: state,
  productsObj: state.products.byId //????
});

const mapDispatchToProps = {
  delProduct,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
