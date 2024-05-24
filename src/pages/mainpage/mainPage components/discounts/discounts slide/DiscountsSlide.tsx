import React from "react";
import classes from "./DiscountsSlide.module.css";

interface DiscountsSlideProps {
  title: string;
  description: string;
  price: string;
  prevPrice: string;
  link: string;
  img: string;
  imgWidth?: string;
  imgRight?: string;
  imgBottom?: string;
}

const DiscountsSlide: React.FC<DiscountsSlideProps> = ({
  title,
  description,
  price,
  prevPrice,
  link,
  img,
  imgWidth,
  imgRight,
  imgBottom,
}) => {
  const imageStyle = {
    width: imgWidth ? imgWidth : "120px",
    right: imgRight ? imgRight : "10px",
    bottom: imgBottom ? imgBottom : "-20px",
  };

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className={classes.discounts_slide_wrapper}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <div style={{ display: "flex" }}>
        <h4>{price}</h4>
        <h5>{prevPrice}</h5>
      </div>
      <button className={classes.discounts_button} onClick={handleClick}>
        <h3>Подробнее</h3>
      </button>
      <img src={img} alt="discount img" style={imageStyle} />
    </div>
  );
};

export default DiscountsSlide;
