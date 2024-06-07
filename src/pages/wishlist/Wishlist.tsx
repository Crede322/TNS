import Header from "../../components/global/header/Header";
import classes from "./Wishlist.module.css";
import FavoriteProduct from "./FavoriteProduct";
import { useEffect, useState } from "react";
import { selectFavorites } from "../../features/favoriteSlice";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const [storedFavorites, setStoredFavorites] = useState<string[]>([]);
  const favoriteList = useSelector(selectFavorites);
  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, [favoriteList]);

  return (
    <div>
      <Header />
      <div className={classes.wishlist_background}>
        <div className={classes.wishlist_container}>
          <h1>Избранное</h1>
          {storedFavorites.map((id) => (
            <FavoriteProduct id={id} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
