import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import PageTwo from "./pages/PageTwo";
import "./common.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/pages",
    element: <PageTwo />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
