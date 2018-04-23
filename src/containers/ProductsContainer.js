import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "actions";
import { getVisibleProducts } from "selectors/productsSelectors";

import ProductItem from "components/ProductItem";
import ProductsList from "components/ProductsList";
import ButtonsSelectView from "containers/ButtonsSelectViewContainer";

import lang from "constants/lang";

import { ThemeProvider } from "styled-components";
import { Wrap, themes } from "styles/ProductsContainerStyle";

const ProductsContainer = ({ products, addToCart, themeProducts }) => (
  <ProductsList title={lang.TITLE_PRODUCTS_CONTAINER}>
    <ButtonsSelectView />
    <ThemeProvider theme={themes[themeProducts]}>
      <Wrap longDisplay>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
            themeProducts={themeProducts}
          />
        ))}
      </Wrap>
    </ThemeProvider>
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      describe: PropTypes.string.isRequired,
      priceIs: PropTypes.number.isRequired,
      priceBefore: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  themeProducts: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  themeProducts: state.products.theme
});

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
