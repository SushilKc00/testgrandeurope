import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App/App";
import { StaticRouter } from "react-router-dom/server";
import WebContextProvider from "./Context/ContextProvider";
import "./Styles/index.scss";

export function render({ path }) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <WebContextProvider>
        <App />
      </WebContextProvider>
    </StaticRouter>
  );
  return { html };
}
