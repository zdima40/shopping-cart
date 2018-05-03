import React from "react";
import PropTypes from "prop-types";

import AddToCartButton from "components/AddToCartButton";

import lang from "constants/lang";

const SpecialOffersProduct = ({ soProduct, onAddToCartClicked }) => {
  if (soProduct) {
    const renderBtn = true;
    return (
      <div>
        <div>
          {lang.NAME_SPECIAL_OFFERS_PRODUCT + ":"} {soProduct.title}
        </div>
        <div>
          {lang.DESCRIPTION_SPECIAL_OFFERS_PRODUCT + ":"}{" "}
          {soProduct.description}
        </div>
        <div>
          {lang.PRICE_SPECIAL_OFFERS_PRODUCT + ":"}{" "}
          {`${soProduct.priceIs} ${soProduct.priceBefore}`}
        </div>
        <AddToCartButton
          onAddToCartClicked={onAddToCartClicked}
          quantity={soProduct.count}
          renderBtn={renderBtn}
        />
      </div>
    );
  } else return <div />;
};

SpecialOffersProduct.propTypes = {
  soProduct: PropTypes.object,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default SpecialOffersProduct;
