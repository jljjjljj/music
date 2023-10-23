import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import routers from "./router";

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={routers} />;
}

export default App;
