import classes from "./NavButton.module.css";
import cart from "../../../img/cart.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalQuantity } from "../../../features/cartSlice";

export default function NavButtonCart() {
  const cartLength = useSelector(totalQuantity);
  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname === "/cart";

  const toCart = () => {
    navigate("/cart");
  };

  return (
    <button
      className={`${classes.nav_button} ${isActive ? classes.nav_button_active : ""}`}
      onClick={toCart}
    >
      <div
        className={classes.counter_badge}
        style={{
          display: cartLength > 0 ? "flex" : "none",
        }}
      >
        {cartLength}
      </div>
      <img src={cart} alt="cart" />
      <p>Корзина</p>
    </button>
  );
}
