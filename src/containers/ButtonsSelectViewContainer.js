import React from "react";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";

import { setProductsViewStyle } from "actions";

import {
  Container,
  Button,
  ButtonBlocks,
  ButtonBlock,
  themeButtonA,
  themeButtonB
} from "styles/ButtonsSelectStyle";

const addAndRemoveClassWrapProductAnimation = () => {
  const getClassName = "sc-gqjmRU";
  const removeClassName = "kXZbhz";
  const els = document.getElementsByClassName(getClassName);
  for (let i = 0; i < els.length; i++) {
    els[i].classList.add(removeClassName);
    setTimeout(() => {
      els[i].classList.remove(removeClassName);
    }, 400);
  }
};

const ButtonsSelectViewContainer = ({ setProductsViewStyle }) => (
  <Container>
    <ThemeProvider theme={themeButtonA}>
      <Button
        onClick={() => {
          addAndRemoveClassWrapProductAnimation();
          return setProductsViewStyle(1);
        }}
      >
        <ButtonBlocks>
          <ButtonBlock />
          <ButtonBlock />
          <ButtonBlock />
          <ButtonBlock />
        </ButtonBlocks>
      </Button>
    </ThemeProvider>
    <ThemeProvider theme={themeButtonB}>
      <Button
        onClick={() => {
          addAndRemoveClassWrapProductAnimation();
          return setProductsViewStyle(2);
        }}
      >
        <ButtonBlocks>
          <ButtonBlock />
          <ButtonBlock />
          <ButtonBlock />
        </ButtonBlocks>
      </Button>
    </ThemeProvider>
  </Container>
);

const mapDispatchToProps = {
  setProductsViewStyle
};

export default connect(null, mapDispatchToProps)(ButtonsSelectViewContainer);
