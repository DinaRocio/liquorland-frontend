/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Global, css } from "@emotion/react";
import { colors } from "./ui";

import reportWebVitals from './reportWebVitals';

const fontFamily = "ABeeZee, sans-serif";

const globalStyles = css`
 @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: grey;
    font-family: ${fontFamily};
    color: ${colors.dark1};
  }
  #root {
    width: 360px;
    background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 32px;
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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
