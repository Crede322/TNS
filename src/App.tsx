import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/redux";
import Mainpage from "./pages/mainpage/Mainpage";
import SearchPage from "./pages/searchPage/SearchPage";
import "./common.css";
import Header from "./components/global/header/Header";
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
        <div>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </Provider>
    </div>
  );
};

export default App;
