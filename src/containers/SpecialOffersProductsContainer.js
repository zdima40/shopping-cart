import React from "react";
import { connect } from "react-redux";

import { setProductSpecialOffers } from "actions";

class SpecialOffersProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.i = 0;
  }

  UNSAFE_componentWillMount() {
    this.props.setProductSpecialOffers(this.props.products[0].id);
  }

  setIdSpecialOffers(e) {
    this.props.setProductSpecialOffers(e.target.id);
    this.props.restartSliderProduct();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.sliderProduct(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Авто смена продукта из спец. предложения
  sliderProduct() {
    const { setProductSpecialOffers, idsSpecialOffersProducts } = this.props;
    const arr = idsSpecialOffersProducts;
    this.i == arr.length - 1 ? (this.i = 0) : this.i++;
    setProductSpecialOffers(arr[this.i]);
  }

  // Перезапускаем обновление sliderProduct
  restartSliderProduct() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.sliderProduct(), 2000);
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setProductSpecialOffers
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SpecialOffersProductsContainer
);
