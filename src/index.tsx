// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importer createRoot depuis 'react-dom/client'
import App from './App';
import './index.css';

// Créer un conteneur pour l'application
const rootElement = document.getElementById('root') as HTMLElement;

// Créer une racine à partir du conteneur
const root = ReactDOM.createRoot(rootElement);

// Rendre l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
