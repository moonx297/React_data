import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Clock from './test02/Clock';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(<Clock />);
}, 1000)

reportWebVitals();