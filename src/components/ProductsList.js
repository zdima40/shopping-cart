import React from "react";
import PropTypes from "prop-types";

import ButtonsSelectView from "containers/ButtonsSelectViewContainer";
import ButtonPagination from "containers/ButtonPaginationContainer";
import ProductsGroups from "containers/ProductsGroupsContainer";

import Grid from "material-ui/Grid";

const ProductsList = ({ title, children }) => (
  <Grid container spacing={16}>
    <Grid item xs={2}>
      <ProductsGroups />
    </Grid>
    <Grid item xs={10}>
      <h3>{title}</h3>
      <ButtonsSelectView />
      <div>{children}</div>
      <ButtonPagination />
    </Grid>
  </Grid>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
