import React from "react";
import classes from "./Mainpage.module.css";
import ReduxTester from "../../components/divided/ReduxTester";

const Mainpage = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.menu__row}>
        <li>
          <h3>Личный кабинет</h3>
          <h4>Получайте бонусы, отслеживайте заказы и делитесь мнением</h4>
          <button className={classes.button__orders}>
            <h2>Мои заказы</h2>
          </button>
        </li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default Mainpage;
