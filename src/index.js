import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CreateProductsPage from './CreateProductsPage/CreateProductsPage';
import Sign from './SignPage/Sign';
import AllProductsPage from './AllProductsPage/AllProductsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }, {
    path: '/create-products',
    element: <CreateProductsPage />
  }, {
    path: '/sign',
    element: <Sign />
  }, {
    path: '/all-products',
    element: <AllProductsPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
