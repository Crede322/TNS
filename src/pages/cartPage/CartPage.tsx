import Header from "../../components/global/header/Header";
import classes from "./CartPage.module.css";
import { selectCart, totalQuantity, } from "../../features/cartSlice";
import { useSelector } from "react-redux";

import CartPageProduct from "./CartPage product/CartPageProduct";

const CartPage = () => {
  const cart = useSelector(selectCart);
  const totalProductsQuantity = useSelector(totalQuantity);

  const cartLength = 
  totalProductsQuantity === 0 ? null :
  totalProductsQuantity === 1 ? totalProductsQuantity + " Товар" :
  totalProductsQuantity < 5 ? totalProductsQuantity + " Товара" :
  totalProductsQuantity >= 5 ? totalProductsQuantity + " Товаров" : null

  return (
    <div>
      <Header />
      <div className={classes.cartPage__background}>
        <div className={classes.container}>
          <div className={classes.cart__span}>
            <h1>Корзина</h1>
            <h2>{cartLength}</h2>
          </div>
          {cart.map((product, index) => (
            <CartPageProduct
              key={product.productId}
              productId={product.productId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
