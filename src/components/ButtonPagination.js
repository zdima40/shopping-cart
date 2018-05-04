import React from "react";

import Button from "material-ui/Button";

import lang from "constants/lang";

const ButtonPagination = ({ loadMoreProducts, ButtonPagination }) => (
  <div>
    <Button variant="raised" color="primary" onClick={loadMoreProducts}>
      {lang.SHOW_MORE_BUTTON_PAGINATION}
    </Button>
  </div>
);

export default ButtonPagination;
