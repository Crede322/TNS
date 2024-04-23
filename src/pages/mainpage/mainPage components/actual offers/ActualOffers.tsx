import React from "react";
import classes from "./ActualOffer.module.css";
import offerImg from "../../../../img/mainMenu/actual offer img.png";

const ActualOffer: React.FC = () => {
  return (
    <div className={classes.actual_offers_row}>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h2>Домашний офис</h2>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h3>Персональные компьютеры</h3>
            </a>
            <a href="!#">
              <h3>Периферия</h3>
            </a>
            <a href="!#">
              <h3>Мониторы</h3>
            </a>
            <a href="!#">
              <h3>Моноблоки</h3>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h2>Домашний офис</h2>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h3>Персональные компьютеры</h3>
            </a>
            <a href="!#">
              <h3>Периферия</h3>
            </a>
            <a href="!#">
              <h3>Мониторы</h3>
            </a>
            <a href="!#">
              <h3>Моноблоки</h3>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h2>Домашний офис</h2>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h3>Персональные компьютеры</h3>
            </a>
            <a href="!#">
              <h3>Периферия</h3>
            </a>
            <a href="!#">
              <h3>Мониторы</h3>
            </a>
            <a href="!#">
              <h3>Моноблоки</h3>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h2>Домашний офис</h2>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h3>Персональные компьютеры</h3>
            </a>
            <a href="!#">
              <h3>Периферия</h3>
            </a>
            <a href="!#">
              <h3>Мониторы</h3>
            </a>
            <a href="!#">
              <h3>Моноблоки</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualOffer;
