import classes from "./FavButtonHeader.module.css";
import favorite from "../../../img/favorite.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { selectFavorites } from "../../../features/favoriteSlice";
import { useSelector } from "react-redux";

export default function FavButtonHeader() {
  const favoriteList = useSelector(selectFavorites);
  const navigate = useNavigate();

  const toWishlist = () => {
    navigate("/wishlist");
  };

  return (
    <button className={classes.nav_button} onClick={toWishlist}>
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
