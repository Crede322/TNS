import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./common.css";
import store from "./store/redux";
import MainPage from "./pages/mainpage/MainPage";
import SearchPage from "./pages/searchPage/SearchPage";
import ProductPage from "./pages/productPage/ProductPage";
import Footer from "./components/global/footer/Footer";
import Wishlist from "./pages/wishlist/Wishlist";
import CatalogPage from "./pages/catalog/CatalogPage";
import CartPage from "./pages/cartPage/CartPage";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </HashRouter>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
