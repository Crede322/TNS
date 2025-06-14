import classes from "./Wishlist.module.css";
import FavoriteProduct from "./wishlist components/FavoriteProduct";
import { useEffect, useState } from "react";
import { selectFavorites } from "../../features/favoriteSlice";
import { useSelector } from "react-redux";
import NoResults from "./wishlist components/wishlist no results/NoResults";

const Wishlist = () => {
  const [storedFavorites, setStoredFavorites] = useState<number[]>([]);
  const favoriteList = useSelector(selectFavorites);

  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, [favoriteList]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const noResults = (
    <div className={classes.wishlist_noResults}>
      <h1>Избранное</h1>
      <NoResults text="В списке пока нет ни одного избранного товара" />
    </div>
  );

  return (
    <div className={classes.wishlist_background}>
      {favoriteList.length === 0 ? (
        noResults
      ) : (
        <div className={classes.wishlist_container}>
          <h1>Избранное</h1>
          {storedFavorites.map((id) => (
            <FavoriteProduct id={id} key={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
