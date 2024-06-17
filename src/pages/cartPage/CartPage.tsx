import Header from "../../components/global/header/Header";
import classes from "./CartPage.module.css";
import { selectCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector(selectCart);

  return (
    <div>
      <Header />
      <div className={classes.cartPage__background}>
        <div className={classes.container}>
          <div className={classes.cart__span}>
            <h1>Корзина</h1>
            <h4>{cart}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
