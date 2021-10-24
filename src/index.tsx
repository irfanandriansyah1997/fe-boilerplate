import React from 'react';
import ReactDOM from 'react-dom';

import { registerServiceWorker } from './helper/service.worker';
import App from './App';

registerServiceWorker();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(`root`)
);
