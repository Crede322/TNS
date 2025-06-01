import classes from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideAuthModal, selectModal } from "../../../features/authSlice";

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
      </div>
    </header>
  );
};

export default Header;
