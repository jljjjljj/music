import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <p>
        <strong>别急!</strong>
      </p>
    ),
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
export default routers;
