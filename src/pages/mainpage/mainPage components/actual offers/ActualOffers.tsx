import React from "react";
import classes from "./ActualOffer.module.css";
import offerImg from "../../../../img/mainMenu/actual offer img.png";

const ActualOffer: React.FC = () => {
  return (
    <div className={classes.actual_offers_row}>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h4>Домашний офис</h4>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h5>Персональные компьютеры</h5>
            </a>
            <a href="!#">
              <h5>Периферия</h5>
            </a>
            <a href="!#">
              <h5>Мониторы</h5>
            </a>
            <a href="!#">
              <h5>Моноблоки</h5>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h4>Домашний офис</h4>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h5>Персональные компьютеры</h5>
            </a>
            <a href="!#">
              <h5>Периферия</h5>
            </a>
            <a href="!#">
              <h5>Мониторы</h5>
            </a>
            <a href="!#">
              <h5>Моноблоки</h5>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h4>Домашний офис</h4>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h5>Персональные компьютеры</h5>
            </a>
            <a href="!#">
              <h5>Периферия</h5>
            </a>
            <a href="!#">
              <h5>Мониторы</h5>
            </a>
            <a href="!#">
              <h5>Моноблоки</h5>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a href="!#">
          <h4>Домашний офис</h4>
        </a>
        <div className={classes.content}>
          <a href="!#" className={classes.offer_button}>
            <img src={offerImg} alt="actual offer img" />
          </a>
          <div className={classes.offer_categories}>
            <a href="!#">
              <h5>Персональные компьютеры</h5>
            </a>
            <a href="!#">
              <h5>Периферия</h5>
            </a>
            <a href="!#">
              <h5>Мониторы</h5>
            </a>
            <a href="!#">
              <h5>Моноблоки</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualOffer;
