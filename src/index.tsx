import React from 'react';
import ReactDOM from 'react-dom';

import '@/style/scss/app.scss';
import { reportWebVitals } from '@/helper';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(`root`)
);

reportWebVitals();
