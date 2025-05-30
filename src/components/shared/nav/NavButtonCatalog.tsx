import classes from "./NavButton.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import catalog from "../../../img/catalog.svg";

export default function NavButtonCatalog() {
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === "/catalog";

  const toCatalog = () => {
    navigate("/catalog?q=null&page=1");
  };

  return (
    <button
      className={`${classes.nav_button} ${isActive ? classes.nav_button_active : ""}`}
      onClick={toCatalog}
    >
      <img src={catalog} alt="catalog" />
      <p>Каталог</p>
    </button>
  );
}
