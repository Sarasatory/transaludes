import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {HashRouter} from 'react-router-dom';
import './styles/Imports.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
