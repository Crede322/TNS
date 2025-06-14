import classes from "./CartPage.module.css";
import { selectCart, totalQuantity } from "../../features/cartSlice";
import { useSelector } from "react-redux";

import CartPageProduct from "./cartPage components/CartPage product/CartPageProduct";
import NoResults from "../wishlist/wishlist components/wishlist no results/NoResults";
import CartPageInfo from "./cartPage components/CartPageInfo/CartPageInfo";

const CartPage = () => {
  const cart = useSelector(selectCart);
  const totalProductsQuantity = useSelector(totalQuantity);

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
    <div>
      <div className={classes.cartPage__background}>
        <div className={classes.container}>
          <div className={classes.cart__span}>
            <h1>Корзина</h1>
            <h2>{cartLength}</h2>
          </div>
          {totalProductsQuantity === 0 ? (
            <NoResults text="Корзина пока пуста" />
          ) : (
            <div className={classes.cart__overview}>
              <div>
                {cart.map((product) => (
                  <CartPageProduct
                    key={product.productId}
                    productId={product.productId}
                  />
                ))}
              </div>
              <CartPageInfo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
