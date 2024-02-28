import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import WebContextProvider from "./Context/ContextProvider";
import "./Styles/index.scss";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <WebContextProvider>
        <App />
      </WebContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
