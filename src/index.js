import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Utiliser React.StrictMode ou pas, à toi de choisir
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Gestion globale des erreurs JS
window.onerror = function(message, source, lineno, colno, error) {
  console.log("Global Error Handler:");
  console.log({ message, source, lineno, colno, error });
};

// ✅ Suivi des performances (optionnel)
reportWebVitals();
