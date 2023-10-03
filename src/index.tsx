import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const element = document.getElementById('root');
if (!element) throw new Error('Error');

const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


