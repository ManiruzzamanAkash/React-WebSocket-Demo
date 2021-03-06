import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';

import { ToastContainer } from 'react-toastify';


// Import reducer
import { Provider } from "react-redux";

// Import Store
import Store from "./redux/Store";

// Import all listeners
import './listeners/index';

require('./services/axios');

ReactDOM.render(
  <Provider store={Store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
