import NavButtonCart from "../nav/NavButtonCart";
import NavButtonCatalog from "../nav/NavButtonCatalog";
import NavButtonFavorite from "../nav/NavButtonFavorite";
import NavButtonHome from "../nav/NavButtonHome";
import NavButtonLogin from "../nav/NavButtonLogin";
import classes from "./MobileMenu.module.css";

export default function MobileMenu() {
  return (
    <nav className={classes.mobile_menu}>
      <NavButtonHome />
      <NavButtonFavorite />
      <NavButtonCatalog />
      <NavButtonCart />
      <NavButtonLogin />
    </nav>
  );
}
