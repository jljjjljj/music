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
        <strong>Please input login in the address bar!</strong>
      </p>
    ),
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
export default routers;
