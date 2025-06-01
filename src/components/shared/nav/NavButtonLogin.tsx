import classes from "./NavButton.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../../../img/profile.svg";
import { useUserdata } from "../../../hooks/auth/useUserData";

export default function NavButtonLogin() {
  const navigate = useNavigate();
  const { user, loading } = useUserdata();
  const location = useLocation();
  const isActive = location.pathname === "/auth";

  const toCart = () => {
    navigate("/auth");
  };

  return (
    <button
      className={`${classes.nav_button} ${isActive ? classes.nav_button_active : ""}`}
      onClick={toCart}
    >
      <img src={profile} alt="login" />
      <p>{loading ? "." : user ? "Вы вошли" : "Войти"}</p>
    </button>
  );
}
