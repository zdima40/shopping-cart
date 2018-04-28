import React from "react";
import { connect } from "react-redux";

import Button from "material-ui/Button";

import { loadMoreProducts } from "actions";

import lang from "constants/lang";

const ButtonPagination = ({ loadMoreProducts }) => (
  <div>
    <Button variant="raised" color="primary" onClick={() => loadMoreProducts()}>
      {lang.SHOW_MORE_BUTTON_PAGINATION}
    </Button>
  </div>
);

const mapDispatchToProps = {
  loadMoreProducts
};

export default connect(null, mapDispatchToProps)(ButtonPagination);
