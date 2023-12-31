import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import './styles/Header.css'
import './styles/Homepage.css'
import './styles/ProductPage.css'
import './styles/ShoppingCart.css'
import './styles/Carousel.css'
import './styles/Reviews.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
