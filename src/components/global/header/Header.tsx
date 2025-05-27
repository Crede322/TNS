import classes from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideAuthModal, selectModal } from "../../../features/authSlice";

import Auth from "../supabase/Auth";
import HeaderDesktop from "./headerDesktop/HeaderDesktop";

const Header = () => {
  const dispatch = useDispatch();
  const loginModal = useSelector(selectModal);
  const location = useLocation();

  const currentPage = location.pathname;

  return (
    <header>
      <div className={classes.pseudo_header} />
      <div
        className={classes.header_inner}
        style={{
          boxShadow:
            currentPage === "/" ? "none" : "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <HeaderDesktop />
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
