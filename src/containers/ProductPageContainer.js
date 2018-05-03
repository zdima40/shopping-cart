import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProductId, addToCart } from "actions";
import { getProduct } from "selectors";

class ProductPageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProductId(this.props.params.id);
  }

  renderProduct() {
    const { product, addToCart } = this.props;
    return (
      <div>
        <img style={{ width: "50px" }} src={product.img} />
        <div> Title: {product.title}</div>
        <div> Describe: {product.describe}</div>
        <div> Price: {product.priceIs}</div>
        <button onClick={() => addToCart(product.id)}>To Cart</button>
      </div>
    );
  }

  render() {
    const { product } = this.props;
    return <div>{product && this.renderProduct()}</div>;
  }
}

const mapStateToProps = state => ({
  product: getProduct(state, state.productPage.id)
});

const mapDispatchToProps = {
  fetchProductId,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductPageContainer
);
