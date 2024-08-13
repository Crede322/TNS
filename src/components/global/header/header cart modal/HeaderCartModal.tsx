import classes from "./HeaderCartModal.module.css";
import {
  totalQuantity,
  selectCart,
  totalProductsPrice,
} from "../../../../features/cartSlice";
import { useSelector } from "react-redux";
import HeaderCartModalProduct from "./header cart module product/HeaderCartModalProduct";

const HeaderCartModal: React.FC = () => {
  const cart = useSelector(selectCart);
  const totalProductsQuantity = useSelector(totalQuantity);
  const productsPrice = useSelector(totalProductsPrice);

  return (
    <div className={classes.cart__modal}>
      <div className={classes.cart__modal__scroll_container}>
        <div className={classes.cart__modal__content}>
          <h2 className={classes.cart__title}>
            Основные товары {totalProductsQuantity}
          </h2>
          <div className={classes.cart__modal__products_list}>
            {cart.map((product) => (
              <HeaderCartModalProduct
                id={product.productId}
                key={product.productId}
              />
            ))}
          </div>
        </div>
        <span>{productsPrice}</span>
      </div>
    </div>
  );
};

export default HeaderCartModal;
