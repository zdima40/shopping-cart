import React from "react";
import { connect } from "react-redux";

import { setProductSpecialOffers } from "actions";

const renderImg = (product, setProductSpecialOffers) => {
  return (
    <div key={product.id}>
      <img
        onClick={setProductSpecialOffers}
        style={{ width: "100px" }}
        src={product.img}
        id={product.id}
      />
    </div>
  );
};

const SpecialOffersProductsContainer = ({
  products,
  setProductSpecialOffers
}) => {
  return (
    <div>
      {products.map(product => renderImg(product, setProductSpecialOffers))}
    </div>
  );
};

const mapDispatchToProps = {
  setProductSpecialOffers
};

export default connect(null, mapDispatchToProps)(
  SpecialOffersProductsContainer
);
