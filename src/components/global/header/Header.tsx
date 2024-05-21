import { useState } from "react";
import classes from "./Header.module.css";
import BlueButton from "../../divided/BlueButton";
import { useNavigate, useLocation } from "react-router-dom";
import { clearSearchTerm } from "../../../features/searchSlice";
import { useDispatch } from "react-redux";

import favorite from "../../../img/favorite.svg";
import profile from "../../../img/profile.svg";
import cart from "../../../img/cart.svg";
import bell from "../../../img/nav/login/bell.svg";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPage = location.pathname;

  const handleLoginModal = () => {
    setLoginModal(true);
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
    dispatch(clearSearchTerm());
  };

  return (
    <header>
      <div
        className={classes.header_fixer}
        style={{
          boxShadow:
            currentPage === "/" ? "none" : "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className={classes.header__inner}>
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
                <button className={classes.menu__btn}>
                  <img src={favorite} alt="img_favorite" />
                  <h2>Избранное</h2>
                </button>
                <button className={classes.menu__btn}>
                  <img src={cart} alt="img_cart" />
                  <h2>Корзина</h2>
                </button>
                <button
                  className={classes.menu__btn}
                  onMouseEnter={() => {
                    setIsLoginHovered(!isLoginHovered);
                  }}
                >
                  <img src={profile} alt="img_profile" />
                  <h2>Войти</h2>
                </button>
              </ul>
              {/* <HeaderNav /> */}
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
                    width={230}
                    height={45}
                    text="Войти"
                    margin="10px 0 20px 0"
                  />
                  <a href="!#">Узнать статус заказа</a>
                  <br />
                  <a href="!#">Обратная связь</a>
                  <br />
                  <a href="!#">Обмен, возврат, гарантия</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classes.popup__form}
          style={{ display: loginModal ? "block" : "none" }}
        />
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
            zIndex: "2",
          }}
          onClick={() => {
            setLoginModal(false);
          }}
        />
      </div>
      <div className={classes.pseudo_header} />
    </header>
  );
};

export default Header;
