import React from "react";
import ReactDOM from "react-dom";
import App from "./components/AppComponent";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
