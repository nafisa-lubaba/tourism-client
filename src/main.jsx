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
import PrivateRoute from './components/PrivateRoute';
import SubCardCom from './components/SubCardCom';
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
        element: <PrivateRoute>
          <CardInfo></CardInfo>,
        </PrivateRoute>

      },
      {
        path:'/countrysub/:country_Name',
        loader: ()=> fetch('http://localhost:5000/card'),
        element: <PrivateRoute>
          <SubCardCom></SubCardCom>
        </PrivateRoute>

      },
      {
        path: '/touristsSpot',
        element: <PrivateRoute>
          <AllTouristsSpot></AllTouristsSpot>,
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/card')
      },

      {
        path: '/addSpot',
        element: <PrivateRoute>
          <AddSpot></AddSpot>
        </PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
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
        element: <PrivateRoute>
          <UpdatedSpot></UpdatedSpot>,
        </PrivateRoute>,
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
