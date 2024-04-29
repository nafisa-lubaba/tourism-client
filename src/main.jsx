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
import CardInfo from './pages/CardInfo';
import UpdatedSpot from './pages/UpdatedSpot'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/card')
      },
      {
        path: '/card/:id',
        loader: () => fetch('http://localhost:5000/card'),
        element: <CardInfo></CardInfo>,

      },
      {
        path: '/touristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:5000/card')
      },

      {
        path: '/addSpot',
        element: <AddSpot></AddSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/updatespot/:id',
        element: <UpdatedSpot></UpdatedSpot>,
        loader: ({ params }) => fetch(`http://localhost:5000/card/${params.id}`),

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
