import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import CSS file from IBM Carbon Framework
import 'carbon-components/css/carbon-components.min.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
