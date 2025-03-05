import { useNavigate } from "react-router-dom";
import classes from "./DiscountOffer.module.css";

interface DiscountOfferProps {
  title: string;
  description: string;
  discountPrice: number;
  oldPrice: number;
  img: string;
  link: string;
}

const DiscountOffer: React.FC<DiscountOfferProps> = ({
  title,
  description,
  discountPrice,
  oldPrice,
  img,
  link,
}) => {
  const navigate = useNavigate();

  const handleClickLink = () => {
    navigate(`/product/${link}`);
  };

  return (
    <div className={classes.offer__wrapper}>
      <span className={classes.offer__title}>{title}</span>
      <span className={classes.offer__description}>{description}</span>
      <div style={{ zIndex: 1 }}>
        <span className={classes.offer__discount_price}>
          {discountPrice.toLocaleString()} ₽
        </span>
        <span className={classes.offer__old_price}>
          {oldPrice.toLocaleString()} ₽
        </span>
      </div>
      <button onClick={handleClickLink} className={classes.offer__button}>
        Подробнее
      </button>
      <img className={classes.offer__img} src={img} alt="discount" />
    </div>
  );
};

export default DiscountOffer;
