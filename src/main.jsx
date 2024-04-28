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
import Provider from './Provider/Provider';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/card')
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
      }, 
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
