import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Popup from 'react-popup';
import 'react-popup/style.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Popup />
    <Toaster position="bottom-center"
      reverseOrder={false}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
