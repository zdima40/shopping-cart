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

const SpecialOffersContainer = ({
  soProducts,
  timeOut,
  soProduct,
  addToCart
}) => {
  if (soProducts.length > 0) {
    console.log("TYPE", typeof soProduct);
    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={3}>
              <SpecialOffersTimer timeOut={timeOut} />
            </Grid>
            <Grid item xs={7}>
              <SpecialOffersProduct
                soProduct={soProduct}
                onAddToCartClicked={() => addToCart(soProduct.id)}
              />
            </Grid>
            <Grid item xs={2}>
              <SpecialOffersProducts
                soProducts={soProducts}
                idsSpecialOffersProducts={getIds(soProducts)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  } else return <div />;
};

//
// const getSoProduct = state => {
//   const product = getProduct(state, state.products.idSpecialOffersProduct);
//   return product ? product : {};
// };

const mapStateToProps = state => ({
  soProducts: getSpecialOffersProducts(state),
  timeOut: state.products.timeOut,
  soProduct: getProduct(state, state.products.idSpecialOffersProduct)
});

const mapDispatchToProps = {
  addToCart,
  getIds
};

SpecialOffersContainer.propTypes = {
  soProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired,
  timeOut: PropTypes.string.isRequired,
  soProduct: PropTypes.object,
  addToCart: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SpecialOffersContainer
);
