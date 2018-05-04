import React from "react";
import PropTypes from "prop-types";
import Product from "components/Product";

import { connect } from "react-redux";

import { delProduct, addToCart, fetchCoupon, checkout } from "actions";

import { getQuantity } from "selectors";

// import material-ui
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

import { ThemeProvider } from "styled-components";
import { themeProduct } from "styles/CartStyle";

import lang from "constants/lang";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupon: ""
    };
    this.handleChangeRendNodes = this.handleChangeRendNodes.bind(this);
    this.handleSubmitRendCoupon = this.handleSubmitRendCoupon.bind(this);
    this.handleChangeRendCoupon = this.handleChangeRendCoupon.bind(this);
  }

  handleChangeRendNodes(e) {
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
                    product.count > 0 ? this.handleChangeRendNodes : undefined
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

  rendCheckoutButton() {
    const { products, discount, checkout } = this.props;
    return (
      <div>
        <Button
          onClick={() => checkout(products, discount)}
          variant="raised"
          disabled={this.hasProducts ? false : true}
        >
          {lang.CHECKOUT_CART}
        </Button>
      </div>
    );
  }

  handleSubmitRendCoupon(e) {
    e.preventDefault();
    const code = this.state.coupon;
    if (!code) {
      return;
    }
    this.props.fetchCoupon(code);
  }

  handleChangeRendCoupon(e) {
    this.setState({ coupon: e.target.value });
  }

  rendCoupon() {
    return (
      <form onSubmit={this.handleSubmitRendCoupon}>
        <label htmlFor="coupon">{lang.COUPON_CART}: </label>
        <input
          type="text"
          id="coupon"
          value={this.state.coupon}
          onChange={this.handleChangeRendCoupon}
        />
        <button>{lang.APPLY_CART}</button>
      </form>
    );
  }

  rendDiscount() {
    const { discount } = this.props;
    return (
      <span>
        {" "}
        {lang.DISCOUNT_CART}: {discount * 100}%
      </span>
    );
  }

  render() {
    const { total, discount } = this.props;
    return (
      <div>
        <h3>{lang.YOUR_CART}</h3>
        <div>{this.rendNodes()}</div>
        <p>
          {lang.TOTAL_CART}: &#36;{total}
          {discount ? this.rendDiscount() : ""}
        </p>
        {this.rendCoupon()}
        {this.rendCheckoutButton()}
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number,
  onCheckoutClicked: PropTypes.func,
  delProduct: PropTypes.func,
  discount: PropTypes.number
};

const mapStateToProps = state => ({
  state: state,
  productsObj: state.products.byId, //????
  discount: state.productPage.discount
});

const mapDispatchToProps = {
  delProduct,
  addToCart,
  fetchCoupon,
  checkout
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
