// src/router.js

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: < Login/>,
      },
      {
        path: "//register",
        element: <Register />,
      },
    ],
  },
]);
