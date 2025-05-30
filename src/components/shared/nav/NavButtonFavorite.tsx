import classes from "./NavButton.module.css";
import favorite from "../../../img/favorite.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { selectFavorites } from "../../../features/favoriteSlice";
import { useSelector } from "react-redux";

export default function NavButtonFavorite() {
  const favoriteList = useSelector(selectFavorites);
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === "/wishlist";

  const toWishlist = () => {
    navigate("/wishlist");
  };

  return (
    <button
      className={`${classes.nav_button} ${isActive ? classes.nav_button_active : ""}`}
      onClick={toWishlist}
    >
      <div
        className={classes.counter_badge}
        style={{
          display: favoriteList.length > 0 ? "flex" : "none",
        }}
      >
        {favoriteList.length}
      </div>
      <img src={favorite} alt="img_favorite" />
      <p>Избранное</p>
    </button>
  );
}
