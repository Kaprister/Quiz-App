import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <h1 className='mainheading'>Quiz App</h1>
      <App />
    </AppProvider>
  </React.StrictMode>
);
