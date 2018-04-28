import React from "react";

import { StyledButton } from "styles/ProductStyle";

import lang from "constants/lang";

const AddToCartButton = ({ onAddToCartClicked, quantity, renderBtn }) => {
  //console.log("onAddToCartClicked", onAddToCartClicked);
  if (renderBtn) {
    return (
      <StyledButton
        variant="raised"
        onClick={onAddToCartClicked}
        disabled={quantity > 0 ? false : true}
      >
        {quantity > 0
          ? lang.ADD_TO_CART_PRODUCT_ITEM
          : lang.SOLD_OUT_PRODUCT_ITEM}
      </StyledButton>
    );
  } else return <div />;
};

export default AddToCartButton;
