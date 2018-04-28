import React from "react";
import { connect } from "react-redux";

import { getSpecialOffersProducts, getProduct } from "selectors";

import SpecialOffersProducts from "containers/SpecialOffersProductsContainer";
import SpecialOffersProduct from "components/SpecialOffersProduct";
import SpecialOffersTimer from "components/SpecialOffersTimer";

import Grid from "material-ui/Grid";

import { addToCart } from "actions";

const SpecialOffers = ({ products, timeOut, product, addToCart }) => {
  if (products.length > 0) {
    return (
      <Grid container>
        <Grid item xs={3}>
          <SpecialOffersTimer timeOut={timeOut} />
        </Grid>
        <Grid item xs={7}>
          <SpecialOffersProduct
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
          />
        </Grid>
        <Grid item xs={2}>
          <SpecialOffersProducts products={products} />
        </Grid>
      </Grid>
    );
  } else return <div />;
};

const mapStateToProps = state => ({
  products: getSpecialOffersProducts(state),
  timeOut: state.products.timeOut,
  product: getProduct(state, state.products.idSpecialOffersProduct)
});

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOffers);
