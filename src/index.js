import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import { MainProvider } from './components/hoc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainProvider>
    <App />
  </MainProvider>
);
