import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage';
import Root from './components/Root';
import Home from './pages/Home';
import AllTouristsSpot from './pages/AllTouristsSpot';
import AddSpot from './pages/AddSpot';
import MyList from './pages/MyList';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/touristsSpot',
        element:<AllTouristsSpot></AllTouristsSpot>
      },
      {
        path:'/addSpot',
        element:<AddSpot></AddSpot>
      },
      {
        path:'/myList',
        element:<MyList></MyList>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
