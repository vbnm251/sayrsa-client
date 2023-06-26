import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/app.css'

export const server = 'http://localhost:8081';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);