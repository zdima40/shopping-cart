import React from "react";
import PropTypes from "prop-types";

import lang from "constants/lang";

import {
  BlocksContainer,
  BlockA,
  BlockB,
  Image,
  Title,
  Describe,
  PriceContainer,
  PriceIs,
  PriceBefore,
  StyledButton
} from "styles/ProductStyle";

// Метод рендера кнопки
function renderButton(onAddToCartClicked, quantity) {
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
}

// Метод рендера описания
function renderDescribe(describe) {
  return <Describe>{describe}</Describe>;
}

const Product = ({
  priceIs,
  priceBefore,
  quantity,
  title,
  describe,
  img,
  onAddToCartClicked,
  renderBtn
}) => (
  <BlocksContainer>
    <BlockA>
      <Image src={img} />
    </BlockA>
    <BlockB>
      <Title>{title}</Title>

      {/* Рендер описания, если получен describe */}
      {describe ? renderDescribe(describe) : ""}

      <PriceContainer>
        <PriceIs>&#36;{priceIs}</PriceIs>
        <PriceBefore>{priceBefore > 0 ? ` $${priceBefore}` : ""}</PriceBefore>
      </PriceContainer>
      {/* {quantity ? ` x ${quantity}` : null} */}

      {/* Рендер кнопки "Add to cart", если получен renderBtn */}
      {renderBtn ? renderButton(onAddToCartClicked, quantity) : ""}
    </BlockB>
  </BlocksContainer>
);

Product.propTypes = {
  priceIs: PropTypes.number,
  priceBefore: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  describe: PropTypes.string,
  img: PropTypes.string
};

export default Product;
