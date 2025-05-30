import classes from "./NavButton.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import home from "../../../img/home.svg";

export default function NavButtonHome() {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === "/";

  const toHome = () => {
    navigate("/");
  };

  return (
    <button
      className={`${classes.nav_button} ${isActive ? classes.nav_button_active : ""}`}
      onClick={toHome}
    >
      <img src={home} alt="home" />
      <p>Главная</p>
    </button>
  );
}
