import React from "react";
import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";
import App from "./App";
import GreetingContainer from './greeting/greeting_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
      <GreetingContainer />
    </HashRouter>
  </Provider>
);

export default Root;