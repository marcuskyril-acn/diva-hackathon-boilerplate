import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "./index.css";
import "./../node_modules/@diva_changi/changi-diva-dls/dist/index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
