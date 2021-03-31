/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
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
    background: grey;
    font-family: ${fontFamily};
  }
  #root {
    width: 100vw;
    background: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin: auto;
    position: relative;
  }

  input {
    font-family: inherit;
    color: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
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
