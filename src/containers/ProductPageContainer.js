import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProductId, addToCart } from "actions";
import { getProduct, getVisibleProducts } from "selectors";

class ProductPageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProductId(this.props.params.id);
  }

  renderSimilarProduct(sp) {
    const { addToCart } = this.props;
    return (
      <div key={sp.id}>
        <img style={{ width: "50px" }} src={sp.img} alt={sp.title} />
        <div> Title: {sp.title}</div>
        <div> Describe: {sp.describe}</div>
        <div> Price: {sp.priceIs}</div>
        <button onClick={() => addToCart(sp.id)}>To Cart</button>
      </div>
    );
  }

  renderProduct() {
    const { product, addToCart, similarProducts } = this.props;
    return (
      <div>
        <img style={{ width: "50px" }} src={product.img} alt={product.title} />
        <div> Title: {product.title}</div>
        <div> Describe: {product.describe}</div>
        <div> Price: {product.priceIs}</div>
        <button onClick={() => addToCart(product.id)}>To Cart</button>

        <div>Similar products:</div>
        <div style={{ display: "flex" }}>
          {console.log("similarProducts", similarProducts)}
          {similarProducts &&
            similarProducts.map(sp => this.renderSimilarProduct(sp))}
        </div>
      </div>
    );
  }

  render() {
    const { product } = this.props;
    return <div>{product && this.renderProduct()}</div>;
  }
}

ProductPageContainer.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: getProduct(state, state.productPage.id),
  similarProducts: getVisibleProducts(state.productPage.similarProducts, state)
});

const mapDispatchToProps = {
  fetchProductId,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductPageContainer
);
