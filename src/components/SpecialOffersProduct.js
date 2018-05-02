import React from "react";
import PropTypes from "prop-types";

import AddToCartButton from "components/AddToCartButton";

import lang from "constants/lang";

const SpecialOffersProduct = ({ product, onAddToCartClicked }) => {
  if (product) {
    const renderBtn = true;
    return (
      <div>
        <div>
          {lang.NAME_SPECIAL_OFFERS_PRODUCT + ":"} {product.title}
        </div>
        <div>
          {lang.DESCRIPTION_SPECIAL_OFFERS_PRODUCT + ":"} {product.description}
        </div>
        <div>
          {lang.PRICE_SPECIAL_OFFERS_PRODUCT + ":"}{" "}
          {`${product.priceIs} ${product.priceBefore}`}
        </div>
        <AddToCartButton
          onAddToCartClicked={onAddToCartClicked}
          quantity={product.count}
          renderBtn={renderBtn}
        />
      </div>
    );
  } else return <div />;
};

SpecialOffersProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    priceIs: PropTypes.number.isRequired,
    priceBefore: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }),
  onAddToCartClicked: PropTypes.func.isRequired
};

export default SpecialOffersProduct;
