import React from "react";
import PropTypes from "prop-types";
import { connect } from "redux";

class PayContainer extends React.Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  productsObj: state.products.byId, //????
  discount: state.productPage.discount
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PayContainer);
