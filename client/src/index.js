import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CartProvider from './providers/cart/cart.provider';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';



ReactDOM.render(
  <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);

serviceWorker.register();