import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const app = (
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  // </React.StrictMode>
);

root.render(app);
