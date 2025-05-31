import HeaderSearch from "../header search/HeaderSearch";
import HeaderCartButton from "../header cart button/HeaderCartButton";
import BlueButton from "../../../shared/blue button/BlueButton";
import classes from "./HeaderDesktop.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showAuthModal } from "../../../../features/authSlice";

import { clearSearchTerm } from "../../../../features/searchSlice";

import profile from "../../../../img/profile.svg";
import bell from "../../../../img/nav/login/bell.svg";
import FavButtonHeader from "../../../shared/Fav button/FavButtonHeader";

export default function HeaderDesktop() {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
    dispatch(clearSearchTerm());
    scrollToTop();
  };

  const handleLoginModal = () => {
    dispatch(showAuthModal());
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ul className={classes.row}>
          <button className={classes.main_button} onClick={redirect}>
            <h1>TNS</h1>
          </button>
          <HeaderSearch />
          <div className={classes.menu__buttons_row}>
            <FavButtonHeader />
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
            <a href="https://crede322.github.io/TNS/#/mockup">Обратная связь</a>
            <br />
            <a href="https://crede322.github.io/TNS/#/mockup">
              Обмен, возврат, гарантия
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
