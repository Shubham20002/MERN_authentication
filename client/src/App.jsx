
import React from 'react'
import Home from './Pages/Home'
import Signin from './Pages/Sign-in'
import Signup from './Pages/Sign-up';
import Header from './Components/Header';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
      children: [
        { path: "",element: <Home/>},
        { path: "/sign-in",element: <Signin/>},
        { path: "/sign-up",element: <Signup/>},
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
   

  )
}
