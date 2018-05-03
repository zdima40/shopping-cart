import React from "react";
import { render } from "react-dom/";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import reducer from "reducers";
//import { getAllProducts } from './actions'

//import Components for Router
import Layout from "components/Layout";
import Products from "containers/ProductsContainer";
import Cart from "containers/CartContainer";
import ProductPage from "containers/ProductPageContainer";

import { injectGlobal } from "styled-components";

// Mui components
import { MuiThemeProvider } from "material-ui/styles";
import theme from "styles/MuiTheme";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const routes = {
  component: Layout,
  childRoutes: [
    { path: "/", component: Products },
    { path: "/groups/:id", component: Products },
    { path: "/cart", component: Cart },
    { path: "/products/:id", component: ProductPage }
  ]
};

injectGlobal`
  body {
    margin-top: 15px;
    background: #f7f7f7;
  }
`;

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
