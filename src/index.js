import React from "react";
import { render } from "react-dom/";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import { injectGlobal } from "styled-components";

// Mui components
import { MuiThemeProvider } from "material-ui/styles";
import theme from "styles/MuiTheme";

import reducer from "reducers";
//import { getAllProducts } from './actions'

//import Components for Router
import Layout from "components/Layout";
import Main from "containers/MainContainer/";
import Cart from "containers/CartContainer/";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

//store.dispatch(fetchProducts())

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const routes = {
  component: Layout,
  childRoutes: [
    { path: "/", component: Main },
    { path: "/cart", component: Cart },
    { path: "*", component: Main }
  ]
};

injectGlobal`
  body {
    margin-top:15px;
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
