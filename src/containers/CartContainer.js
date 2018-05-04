import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTotal, getCartProducts } from "selectors";
import Cart from "components/Cart";

const CartContainer = ({ products, total }) => (
  <Cart products={products} total={total} />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      priceIs: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  total: PropTypes.string
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state, state.productPage.discount)
});

export default connect(mapStateToProps, null)(CartContainer);
