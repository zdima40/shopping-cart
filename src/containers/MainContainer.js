import React, { Component } from "react";
import { connect } from "react-redux";

import ProductsContainer from "containers/ProductsContainer";

import { fetchProducts } from "actions";

import lang from "constants/lang";

class MainContainer extends Component {
  // shouldComponentUpdate(nextProps) {
  //   const theme = this.props.theme;
  //   console.log("theme", theme);
  //   console.log("nextProps", nextProps.theme);
  //   //console.log("shouldComponentUpdate", theme !== nextProps.theme);
  //   return true;
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   const theme = this.props.theme;
  //   console.log("theme", theme);
  //   console.log("nextProps", nextProps.theme);
  //   console.log("componentWillReceiveProps", theme !== nextProps.theme);
  //   return theme !== nextProps.theme;
  // }

  componentDidMount() {
    this.props.fetchProducts();
    this.delClassWrapProductAnimation();
  }

  delClassWrapProductAnimation() {
    setTimeout(() => {
      const getClassName = "sc-gqjmRU";
      const removeClassName = "kXZbhz";
      const els = document.getElementsByClassName(getClassName);
      //console.log("ELS", els);
      for (let i = 0; i < els.length; i++) {
        els[i].classList.remove(removeClassName);
      }
    }, 400);
  }

  render() {
    return (
      <div>
        <h2>{lang.TITLE_MAIN_CONTAINER}</h2>
        <hr />
        <ProductsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.products.theme
});

const mapDispatchToProps = {
  fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
