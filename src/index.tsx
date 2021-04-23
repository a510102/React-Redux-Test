import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store';
import { addArticle } from './actions';
import './index.css';
import reportWebVitals from './reportWebVitals';

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <div>Start</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
