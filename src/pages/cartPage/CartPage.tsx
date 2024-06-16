import Header from "../../components/global/header/Header";
import classes from "./CartPage.module.css";

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className={classes.cartPage__background}>
        <div className={classes.container}>
          <div className={classes.cart__span}>
            <h1>Корзина</h1>
            <h4>ыва</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
