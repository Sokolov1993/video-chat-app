import React from 'react';
import ReactDOM from 'react-dom/client';

import { ContextProvider } from './socketContext/socketContext';

import App from './App';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
