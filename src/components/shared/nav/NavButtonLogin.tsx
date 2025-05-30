import classes from "./NavButton.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../../../img/profile.svg";

export default function NavButtonLogin() {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === "/login";

  const toCart = () => {
    navigate("/login");
  };

  return (
    <button
      className={`${classes.nav_button} ${isActive ? classes.nav_button_active : ""}`}
      onClick={toCart}
    >
      <img src={profile} alt="login" />
      <p>Войти</p>
    </button>
  );
}
