import React from "react";
import Header from "../../components/global/header/Header";
import classes from "./Wishlist.module.css";

const Wishlist = () => {
  return (
    <div>
      <Header />
      <div className={classes.wishlist_background}>
        <div className={classes.wishlist_container}>
          <h1>Избранное</h1>
          <div className={classes.wishlist_management}></div>
        </div>
        <div className={classes.wishlist_catalog}></div>
      </div>
    </div>
  );
};

export default Wishlist;
