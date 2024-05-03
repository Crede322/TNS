import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/redux";
import Mainpage from "./pages/mainpage/MainPage";
import SearchPage from "./pages/searchPage/SearchPage";
import "./common.css";
import Footer from "./components/global/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
