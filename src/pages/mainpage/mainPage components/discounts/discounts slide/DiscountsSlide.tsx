import React from "react";
import classes from "./DiscountsSlide.module.css";

interface DiscountsSlideProps {
  title: string;
  description: string;
  price: string;
  prevPrice: string;
  link: string;
}

const DiscountsSlide: React.FC<DiscountsSlideProps> = ({
  title,
  description,
  price,
  prevPrice,
  link,
}) => {
  return (
    <div className={classes.discounts_slide_wrapper}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <div style={{ display: "flex" }}>
        <h4>{price}</h4>
        <h5>{prevPrice}</h5>
      </div>
      <button className={classes.discounts_button}>
        <h3>Подробнее</h3>
      </button>
      <img
        src="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/10"
        alt="discount img"
      />
    </div>
  );
};

export default DiscountsSlide;
