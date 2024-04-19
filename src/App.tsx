import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/redux";
import Mainpage from "./pages/mainpage/Mainpage";
import PageTwo from "./pages/PageTwo";
import "./common.css";
import Header from "./components/global/header/Header";

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
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;
