import React, { useEffect } from "react";
import Header from "../../components/global/header/Header";
import classes from "./Wishlist.module.css";
import FavoriteProduct from "./FavoriteProduct";

const Wishlist = () => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]",
  );
  console.log(favorites);

  return (
    <div>
      <Header />
      <div className={classes.wishlist_background}>
        <div className={classes.wishlist_container}>
          <h1>Избранное</h1>
          {favorites.map((id) => (
            <FavoriteProduct id={id} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
