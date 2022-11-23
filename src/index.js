import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import './i18n';

(async () => {
    const stripePromise = await loadStripe("pk_test_51M5rwUDuPUNprb5LJhjBZ0V8evyNKKwKDc3qnzsFNk7zdcfE2IHsvv9aI8NvhVbgDASIeCXHrpgXUOpDfD1srOHU00J1j6v7e3")

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
          <BrowserRouter>
              <Elements stripe={stripePromise}>
                  <App />
              </Elements>
          </BrowserRouter>
    );
})()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
