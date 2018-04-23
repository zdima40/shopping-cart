import style from "styled-components";

export const themeButtonA = {
  buttonBlocks: {
    flexFlow: "row wrap"
  },
  buttonBlock: {
    height: "6px",
    width: "6px"
  }
};

export const themeButtonB = {
  button: {},
  buttonBlocks: {
    flexFlow: "column wrap"
  },
  buttonBlock: {
    height: "3px",
    width: "auto"
  }
};

export const Container = style.div`
  display: flex;
`;

export const Button = style.div`
  position: relative;
  height: 40px;
  width: 40px;
  background: #3077bf;
  border: 1px solid #3077bf;
  border-radius: 5px;
  margin: 5px;
  transition: background 0.2s 0.1s ease;
  &:hover {
    background: #fff;
  }
`;

export const ButtonBlocks = style.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: ${props => props.theme.buttonBlocks.flexFlow}
  align-content: center;
  width: 16px;
  
`;

export const ButtonBlock = style.div`
  height: ${props => props.theme.buttonBlock.height}
  width: ${props => props.theme.buttonBlock.width}
  margin: 1px;
  background: #fff;

  ${Button}:hover & {
    background: #3077bf;
  }
`;
