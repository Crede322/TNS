import { useState } from "react";
import classes from "./CartPageInfo.module.css";
import { useSelector } from "react-redux";
import {
  totalQuantity,
  selectCart,
  totalProductsPrice,
} from "../../../../features/cartSlice";

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
      </div>
    </div>
  );
};

export default CartPageInfo;
