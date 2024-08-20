import classes from "./CartPageInfo.module.css";
import { useSelector } from "react-redux";
import {
  totalQuantity,
  totalProductsPrice,
} from "../../../../features/cartSlice";
import BlueButton from "../../../../components/shared/blue button/BlueButton";

const CartPageInfo = () => {
  const totalProductsQuantity = useSelector(totalQuantity);
  const totalPrice = useSelector(totalProductsPrice);

  const cartLength =
    totalProductsQuantity === 0
      ? null
      : totalProductsQuantity === 1
        ? totalProductsQuantity + " Товар"
        : totalProductsQuantity < 5
          ? totalProductsQuantity + " Товара"
          : totalProductsQuantity >= 5
            ? totalProductsQuantity + " Товаров"
            : null;

  return (
    <div className={classes.cart__info}>
      <div className={classes.cart__info_top}>
        <span className={classes.cart__info_conditions}>Условия заказа</span>
      </div>
      <div className={classes.cart__info_total_amount}>
        <span className={classes.cart__summary}>Итого:</span>
        <span className={classes.cart__products_title}>
          {cartLength} {totalPrice.toLocaleString()} ₽
        </span>
        <BlueButton
          width="100%"
          height="64px"
          text="Купить"
          margin="20px 0px"
        />
        <div className={classes.product__avails_total}>
          <div className={classes.product__avails_block}>
            <h4>В наличии:</h4>
            <h5>во всех магазинах</h5>
          </div>
          <div className={classes.product__avails_block}>
            <h4>Доставим на дом:</h4>
            <h5>если захотим</h5>
          </div>
        </div>
      </div>
      <div className={classes.best__price}>Нашли дешевле? Цену не снизим.</div>
    </div>
  );
};

export default CartPageInfo;
