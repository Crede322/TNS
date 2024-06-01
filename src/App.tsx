import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/redux";
import Mainpage from "./pages/mainpage/MainPage";
import SearchPage from "./pages/searchPage/SearchPage";
import ProductPage from "./pages/productPage/ProductPage";
import "./common.css";
import Footer from "./components/global/footer/Footer";
import Wishlist from "./pages/wishlist/Wishlist";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </HashRouter>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
