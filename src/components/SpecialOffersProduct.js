import React from "react";

import AddToCartButton from "components/AddToCartButton";

const SpecialOffersProduct = ({ product, onAddToCartClicked }) => {
  if (product) {
    const renderBtn = true;
    return (
      <div>
        <div>Title: {product.title}</div>
        <div>Description: {product.description}</div>
        <div>Price: {`${product.priceIs} ${product.priceBefore}`}</div>
        <AddToCartButton
          onAddToCartClicked={onAddToCartClicked}
          quantity={product.count}
          renderBtn={renderBtn}
        />
      </div>
    );
  } else return <div />;
};

export default SpecialOffersProduct;
