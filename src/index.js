import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Error from './components/Error';
import Help from './components/Help';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restaurants from './components/Restaurants';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Restaurants />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/help',
        element: <Help />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
