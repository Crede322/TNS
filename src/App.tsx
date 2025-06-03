import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./common.css";
import store from "./store/redux";
import MainPage from "./pages/mainPage/MainPage";
import SearchPage from "./pages/searchPage/SearchPage";
import ProductPage from "./pages/productPage/ProductPage";
import Footer from "./components/global/footer/Footer";
import Wishlist from "./pages/wishlist/Wishlist";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import CartPage from "./pages/cartPage/CartPage";
import MockupPage from "./pages/mockupPage/MockupPage";
import Header from "./components/global/header/Header";
import MobileMenu from "./components/shared/mobileMenu/MobileMenu";
import AuthPage from "./pages/auth/AuthPage";
import Discounts from "./pages/discountsPage/Discounts";
import MatchProduct from "./pages/matchProductPage/MatchProduct";
import Releases from "./pages/releasesPage/Releases";
import Service from "./pages/servicePage/Service";
import Tests from "./pages/testsPage/Tests";
import Help from "./pages/helpPage/Help";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/mockup" element={<MockupPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/match" element={<MatchProduct />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/service" element={<Service />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/help" element={<Help />} />
          </Routes>
          <Footer />
          <MobileMenu />
        </HashRouter>
      </Provider>
    </div>
  );
};

export default App;
