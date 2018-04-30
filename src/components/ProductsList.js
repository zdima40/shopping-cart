import React from "react";
import PropTypes from "prop-types";

import ButtonsSelectView from "containers/ButtonsSelectViewContainer";
import ButtonPagination from "components/ButtonPagination";
import ProductsGroups from "containers/ProductsGroupsContainer";
import SpecialOffers from "containers/SpecialOffersContainer";

import Grid from "material-ui/Grid";

const ProductsList = ({ title, children, loadMoreProducts }) => (
  <Grid container spacing={16}>
    <Grid item xs={2}>
      <ProductsGroups />
    </Grid>
    <Grid item xs={10}>
      <SpecialOffers />
      <h3>{title}</h3>
      <ButtonsSelectView />
      <div>{children}</div>
      <ButtonPagination loadMoreProducts={loadMoreProducts} />
    </Grid>
  </Grid>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
