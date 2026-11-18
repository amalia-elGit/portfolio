// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layouts from '../views/app/layouts.jsx'; // Sesuaikan jalur jika letak layouts.jsx berbeda
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layouts />
  </React.StrictMode>
);