import 'react-app-polyfill/ie9';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";


ReactDOM.render((
  <BrowserRouter>
        <Route path="/" component={App} />
  </BrowserRouter>
  ), document.getElementById("root"));
