import HeaderSearch from "../header search/HeaderSearch";
import HeaderCartButton from "../header cart button/HeaderCartButton";
import BlueButton from "../../../shared/blue button/BlueButton";
import classes from "./HeaderDesktop.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showAuthModal } from "../../../../features/authSlice";
import { useUserdata } from "../../../../hooks/auth/useUserData";
import { Link } from "react-router-dom";
import { clearSearchTerm } from "../../../../features/searchSlice";

import profile from "../../../../img/profile.svg";
import bell from "../../../../img/nav/login/bell.svg";
import FavButtonHeader from "../../../shared/Fav button/FavButtonHeader";

export default function HeaderDesktop() {
  const { user, loading } = useUserdata();
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
              <h2>{loading ? "." : user ? "Аккаунт" : "Войти"}</h2>
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
            {user && (
              <h3 className={classes.user__info}>Вы вошли как {user.email}</h3>
            )}
            <Link to="/auth">
              <BlueButton
                width="230px"
                height="45px"
                text={!user ? "Войти" : "В кабинет"}
                margin="10px 0 20px 0"
              />
            </Link>
            <Link to="/">Узнать статус заказа</Link>
            <br />
            <Link to="/">Обратная связь</Link>
            <br />
            <Link to="/">Обмен, возврат, гарантия</Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
