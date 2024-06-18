import Header from "../../components/global/header/Header";
import classes from "./CartPage.module.css";
import { selectCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";

import CartButton from "../../components/shared/cart button/CartButton";

const CartPage = () => {
  const cart = useSelector(selectCart);
  console.log(cart);

  return (
    <div>
      <Header />
      <div className={classes.cartPage__background}>
        <div className={classes.container}>
          <div className={classes.cart__span}>
            <h1>Корзина</h1>
          </div>
          <CartButton id={14} />
          <CartButton id={13} />
          <CartButton id={15} />
          <CartButton id={17} />
          {/* {cart.map((cartProduct) => (
            <div key={cartProduct}>{cartProduct}</div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
