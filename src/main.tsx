import React from "react";

import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home.tsx";

import "./index.css";
import { Customer } from "./pages/Customer.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/customer',
    element: <Customer />
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
