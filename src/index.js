import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Santander } from './components/santander';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './globalStyle'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/santander",
    element: <Santander />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();