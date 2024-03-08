import React from "react";
import classes from "./Header.module.css";

import search from "../img/search.svg";
import favorite from "../img/favorite.svg";
import profile from "../img/profile.svg";
import cart from "../img/cart.svg";

const Header = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.header__container}>
          <ul className={classes.header__row}>
            <li>
              <button className={classes.menu__main_button}></button>
            </li>
            <li>
              <div className={classes.search}>Поиск</div>
            </li>
            <li>
              <button className={classes.menu__btn}>
                <img src={favorite} alt="img_favorite" />
                <h2>Избранное</h2>
              </button>
            </li>
            <li>
              <button className={classes.menu__btn}>
                <img src={cart} alt="img_cart" />
                <h2>Корзина</h2>
              </button>
            </li>
            <li>
              <button className={classes.menu__btn}>
                <img src={profile} alt="img_profile" />
                <h2>Войти</h2>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
