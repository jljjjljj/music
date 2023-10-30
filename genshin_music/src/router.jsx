import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Subpage from "./pages/subpage";
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
  {
    path: "/divide",
    element: <Subpage />,
  },
]);
export default routers;
