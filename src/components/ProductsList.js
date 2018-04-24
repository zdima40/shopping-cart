import React from "react";
import PropTypes from "prop-types";

import ButtonsSelectView from "components/ButtonsSelectViewContainer";
import ButtonPagination from "components/ButtonPagination";

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <ButtonsSelectView />
    <div>{children}</div>
    <ButtonPagination />
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
