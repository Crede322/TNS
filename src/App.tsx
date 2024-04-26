import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/redux";
import Mainpage from "./pages/mainpage/Mainpage";
import PageTwo from "./pages/PageTwo";
import "./common.css";
import Header from "./components/global/header/Header";
import Footer from "./components/global/footer/Footer";

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
      <div style={{ overflowX: "hidden" }}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
