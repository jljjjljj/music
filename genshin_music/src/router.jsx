import React, { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Subpage from "./pages/subpage";
import Song_list from "./pages/song_list";
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
  {
    path: "/songlist",
    element: <Song_list />,
  },
]);
export default routers;
