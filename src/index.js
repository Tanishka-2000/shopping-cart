import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
// import App from './App';
import Root from './components/root';
import Home from './components/home/Home';
import Shopping from './components/shopping/Shopping';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shopping',
        element: <Shopping />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
