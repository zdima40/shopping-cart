import style from "styled-components";

export const Wrap = style.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: ${props =>
    props.theme.productContainer.wrap.flexDirection
      ? props.theme.productContainer.wrap.flexDirection
      : "row"};

`;
const themeProductContainer1 = {
  productContainer: {
    wrap: {
      flexDirection: "column"
    }
  },
  productItem: {
    productContainer: {
      width: "none",
      marginRight: "none",
      marginBottom: "10px"
    }
  },
  product: {
    blocksContainer: {
      flexDirection: "row"
    },
    blockB: {
      alignItems: "baseline"
    },
    image: {
      height: "150px",
      width: "auto"
    },
    describe: {
      visibility: "visible"
    }
  }
};

const themeProductContainer2 = {
  productContainer: {
    wrap: {
      flexDirection: "row"
    }
  },
  productItem: {
    productContainer: {
      width: "200px",
      marginRight: "20px",
      marginBottom: "10px"
    }
  },
  product: {
    blocksContainer: {
      flexDirection: "column"
    },
    blockB: {
      alignItems: "center"
    },
    image: {
      height: "60%",
      width: "80%"
    },
    describe: {
      visibility: "hidden"
    }
  }
};

export const SelectStyleContainer = {
  display: "inlineBlock"
};

export const themes = {
  1: themeProductContainer2,
  2: themeProductContainer1
};
