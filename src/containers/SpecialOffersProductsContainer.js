import React from "react";
import { connect } from "react-redux";

import { setProductSpecialOffers } from "actions";

class SpecialOffersProductsContainer extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.setProductSpecialOffers(this.props.products[0].id);
  }

  setIdSpecialOffers(e) {
    this.props.setProductSpecialOffers(e.target.id);
  }

  renderImg(product) {
    //const { setProductSpecialOffers } = this.props;
    return (
      <div key={product.id}>
        <img
          onClick={this.setIdSpecialOffers.bind(this)}
          style={{ width: "100px" }}
          src={product.img}
          id={product.id}
        />
      </div>
    );
  }

  render() {
    const { products } = this.props;
    return <div>{products.map(product => this.renderImg(product))}</div>;
  }
}

const mapDispatchToProps = {
  setProductSpecialOffers
};

export default connect(null, mapDispatchToProps)(
  SpecialOffersProductsContainer
);
