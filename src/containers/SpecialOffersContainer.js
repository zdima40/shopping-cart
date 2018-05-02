import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getSpecialOffersProducts, getProduct, getIds } from "selectors";

import SpecialOffersProducts from "containers/SpecialOffersProductsContainer";
import SpecialOffersProduct from "components/SpecialOffersProduct";
import SpecialOffersTimer from "components/SpecialOffersTimer";

import Grid from "material-ui/Grid";

import Card, { CardContent } from "material-ui/Card";

import { addToCart } from "actions";

const SpecialOffersContainer = ({ products, timeOut, product, addToCart }) => {
  if (products.length > 0) {
    return (
      <Card>
        <CardContent>
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
              <SpecialOffersProducts
                products={products}
                idsSpecialOffersProducts={getIds(products)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  } else return <div />;
};

const mapStateToProps = state => ({
  products: getSpecialOffersProducts(state),
  timeOut: state.products.timeOut,
  product: getProduct(state, state.products.idSpecialOffersProduct)
});

const mapDispatchToProps = {
  addToCart,
  getIds
};

SpecialOffersContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired,
  timeOut: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    priceIs: PropTypes.number.isRequired,
    priceBefore: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }),
  addToCart: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SpecialOffersContainer
);
