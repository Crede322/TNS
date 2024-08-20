import classes from "./Header.module.css";

import BlueButton from "../../shared/blue button/BlueButton";
import HeaderSearch from "./header search/HeaderSearch";
import HeaderCartButton from "./header cart button/HeaderCartButton";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchTerm } from "../../../features/searchSlice";
import { selectFavorites } from "../../../features/favoriteSlice";
import {
  hideAuthModal,
  selectModal,
  showAuthModal,
} from "../../../features/authSlice";

import favorite from "../../../img/favorite.svg";
import profile from "../../../img/profile.svg";
import bell from "../../../img/nav/login/bell.svg";
import Auth from "../supabase/Auth";

const Header = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const loginModal = useSelector(selectModal);
  const favoriteList = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const location = useLocation();

  const currentPage = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
    dispatch(clearSearchTerm());
    scrollToTop();
  };
  const toWishlist = () => {
    navigate("/wishlist");
  };

  const handleLoginModal = () => {
    dispatch(showAuthModal());
  };

  return (
    <header>
      <div className={classes.pseudo_header} />
      <div
        className={classes.header_fixer}
        style={{
          boxShadow:
            currentPage === "/" ? "none" : "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className={classes.wrapper}>
          <div className={classes.header__container}>
            <ul className={classes.header__row}>
              <div className={classes.header__row_left}>
                <button
                  className={classes.menu__main_button}
                  onClick={redirect}
                >
                  <h1>TNS</h1>
                </button>
                <HeaderSearch />
              </div>
              <div className={classes.menu__buttons_row}>
                <button className={classes.menu__btn} onClick={toWishlist}>
                  <div
                    className={classes.counter_badge}
                    style={{
                      display: favoriteList.length > 0 ? "flex" : "none",
                    }}
                  >
                    {favoriteList.length}
                  </div>
                  <img src={favorite} alt="img_favorite" />
                  <h2>Избранное</h2>
                </button>
                <HeaderCartButton />
                <button
                  className={classes.menu__btn}
                  onMouseEnter={() => {
                    setIsLoginHovered(!isLoginHovered);
                  }}
                >
                  <img src={profile} alt="img_profile" />
                  <h2>Войти</h2>
                </button>
              </div>
            </ul>
            <div
              className={classes.login_popup}
              onMouseLeave={() => {
                setIsLoginHovered(!isLoginHovered);
              }}
              style={{
                transition: "all 0.4s",
                transformOrigin: "90% 5%",
                transform: isLoginHovered ? "scale(1)" : "scale(0)",
              }}
            >
              <div className={classes.login__left_section}>
                <h3>Уведомления</h3>
                <div className={classes.login__left_wrapper}>
                  <div className={classes.login__left_section_notification}>
                    <img src={bell} alt="img bell" />
                  </div>
                  <h4>Пока пусто</h4>
                  <h5>
                    &nbsp;&nbsp;Здесь будут храниться
                    <br />
                    уведомления о событиях
                  </h5>
                </div>
              </div>
              <div className={classes.login__right_section}>
                <h3 className={classes.login__title}>
                  Получайте бонусы, сохраняйте и отслеживайте заказы
                </h3>
                <BlueButton
                  onClick={handleLoginModal}
                  width="230px"
                  height="45px"
                  text="Войти"
                  margin="10px 0 20px 0"
                />
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Узнать статус заказа
                </a>
                <br />
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Обратная связь
                </a>
                <br />
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Обмен, возврат, гарантия
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          className={classes.popup__form}
          style={{ display: loginModal ? "block" : "none", zIndex: 8 }}
        >
          <Auth />
        </div>
        <div
          className={classes.modal__bg}
          style={{
            height: "100vh",
            width: "100vw",
            background: "rgba(0, 0, 0, 0.4)",
            position: "absolute",
            left: "0",
            top: "0",
            display: loginModal ? "block" : "none",
            zIndex: "7",
          }}
          onClick={() => {
            dispatch(hideAuthModal());
          }}
        />
      </div>
    </header>
  );
};

export default Header;
