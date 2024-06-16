import classes from "./CartButton.module.css";
import cartImg from "../../../img/cart.svg";

const CartButton = () => {
  return (
    <div>
      <div className={classes.cart__button}>
        <img src={cartImg} alt="cart" />
      </div>
    </div>
  );
};

export default CartButton;
