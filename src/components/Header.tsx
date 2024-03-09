import React from "react";
import classes from "./Header.module.css";

import search from "../img/search.svg";
import favorite from "../img/favorite.svg";
import profile from "../img/profile.svg";
import cart from "../img/cart.svg";

import videocard from "../img/nav/videocard.svg";
import cpu from "../img/nav/cpu.svg";
import ram from "../img/nav/ram.svg";
import motherboard from "../img/nav/motherboard.svg";
import compCase from "../img/nav/case.svg";
import fan from "../img/nav/fan.svg";

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
              <button className={classes.menu__btn}>
                <img src={cart} alt="img_cart" />
                <h2>Корзина</h2>
              </button>
              <button className={classes.menu__btn}>
                <img src={profile} alt="img_profile" />
                <h2>Войти</h2>
              </button>
            </li>
          </ul>
        </div>
        <div className={classes.nav}>
          <img src={videocard} alt="img_videocard" />
          <img src={cpu} alt="img_cpu" />
          <img src={ram} alt="img_ram" />
          <img src={motherboard} alt="motherboard" />
          <img src={compCase} alt="case" />
          <img src={fan} alt="fan" />
        </div>
      </div>
    </div>
  );
};

export default Header;
