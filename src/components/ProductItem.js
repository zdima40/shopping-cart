import React from "react";
import PropTypes from "prop-types";
import Product from "components/Product";

import { ProductContainer, WrapAnimation } from "styles/ProductItemStyle";

const ProductItem = ({ product, onAddToCartClicked, themeProducts }) => (
  <WrapAnimation>
    <ProductContainer>
      <Product
        id={product.id}
        title={product.title}
        describe={themeProducts === 2 ? product.describe : ""}
        priceIs={product.priceIs}
        priceBefore={product.priceBefore}
        quantity={product.count}
        img={product.img}
        onAddToCartClicked={onAddToCartClicked}
        renderBtn
      />
    </ProductContainer>
  </WrapAnimation>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    priceIs: PropTypes.number.isRequired,
    priceBefore: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  themeProducts: PropTypes.number.isRequired
};

export default ProductItem;
