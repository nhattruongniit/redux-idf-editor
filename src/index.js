import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga4";

// components
import App from "./App";

// store
import { store } from "./store";

// styles
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);

// run localhost
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
