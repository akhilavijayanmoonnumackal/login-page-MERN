import React from "react";
import {createBrowserRouter, RouterProvider } from 'react-router-dom';


//import all components
import Username from "./components/Username";
import Signup from "./components/Signup";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";

//root routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username></Username>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/reset',
        element: <Reset></Reset>
    },
    {
        path: '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path: '/profile',
        element: <Profile></Profile>
    },
    {
        path: '/password',
        element: <Password></Password>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
])

export default function App()  {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
        
    )
}