import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/T_Adinarayana_portfolio">
    {" "}
    <App />
  </BrowserRouter>,
);
