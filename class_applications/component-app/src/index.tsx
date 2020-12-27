import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TypographyEx } from "./TypographyEx";
import reportWebVitals from './reportWebVitals';
import { Typography } from '@material-ui/core';
import MainEx from "./MainEx";

ReactDOM.render(
  <React.StrictMode>
    <MainEx />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
