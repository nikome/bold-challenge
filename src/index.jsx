import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const target = document.querySelector('#root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  target
);
