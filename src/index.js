import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';

import App from './App';
import "./styles/App.scss"

// Load IBM Plex Sans typeface
require('typeface-ibm-plex-sans')

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App/> 
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
