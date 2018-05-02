import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setProductSpecialOffers } from "actions";

class SpecialOffersProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.idxSlider = 0;
  }

  UNSAFE_componentWillMount() {
    this.props.setProductSpecialOffers(this.props.products[0].id);
  }

  setIdSpecialOffers(e) {
    this.props.setProductSpecialOffers(e.target.id);
    this.restartSliderProduct();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.sliderProduct(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Авто смена продукта из спец. предложения
  sliderProduct() {
    const { setProductSpecialOffers, idsSpecialOffersProducts } = this.props;
    const arr = idsSpecialOffersProducts;
    this.idxSlider == arr.length - 1 ? (this.idxSlider = 0) : this.idxSlider++;
    setProductSpecialOffers(arr[this.idxSlider]);
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

SpecialOffersProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired,
  idsSpecialOffersProducts: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SpecialOffersProductsContainer
);
