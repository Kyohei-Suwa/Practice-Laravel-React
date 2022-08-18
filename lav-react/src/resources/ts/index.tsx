import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const container = document.getElementById('app') as HTMLInputElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
