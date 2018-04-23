import style, { keyframes } from "styled-components";

// import material-ui
import Card from "material-ui/Card";

const anim = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ProductContainer = style(Card)`
    width: ${props => props.theme.productItem.productContainer.width}
    margin-right: ${props =>
      props.theme.productItem.productContainer.marginRight}
    padding: 10px;
    margin-bottom: ${props =>
      props.theme.productItem.productContainer.marginBottom}

  `;

export const WrapAnimation = style.div`
    animation: ${anim} .3s ease-in-out;
  `;
