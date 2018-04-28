import style from "styled-components";
import Button from "material-ui/Button";

const product = props => props.theme.product;

export const BlocksContainer = style.div`
  display: flex;
  flex-direction: ${props => product(props).blocksContainer.flexDirection}
  height: 100%;
`;

export const BlockA = style.div`
`;

export const BlockB = style.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => product(props).blockB.alignItems}
  height: inherit;
`;

export const Image = style.img`
  height: ${props => product(props).image.height}
  width: ${props => product(props).image.width}
  min-width: 200px;
`;

export const Title = style.div`
  font-weight: bold;
`;

export const Describe = style.div`
  margin: 5px auto;
`;

export const PriceContainer = style.div`
  margin: auto 5px 5px 5px;
`;

export const PriceIs = style.span`
  font-weight: bold;
`;

export const PriceBefore = style.span`
  text-decoration: line-through;
`;

export const StyledButton = style(Button)`
  margin: auto 5px 5px 5px !important; 
`;
