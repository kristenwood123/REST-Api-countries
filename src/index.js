import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context'


ReactDOM.render(
     <BrowserRouter>
        <AppProvider>
        <App />
        </AppProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

