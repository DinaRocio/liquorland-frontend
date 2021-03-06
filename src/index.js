/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import { colors } from "./ui";
import "./index.css";
import App from "./App";
import { Global, css } from "@emotion/react";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";

const fontFamily = "ABeeZee, sans-serif";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Abel&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${colors.gray3} ;
    font-family: ${fontFamily};
  }

  input {
    font-family: inherit;
    color: inherit;
  }
  a {
    text-decoration: none;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
