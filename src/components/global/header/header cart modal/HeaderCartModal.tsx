import classes from "./HeaderCartModal.module.css";
import {
  totalQuantity,
  selectCart,
  totalProductsPrice,
  hidePopup,
} from "../../../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import HeaderCartModalProduct from "./header cart modal product/HeaderCartModalProduct";
import { useNavigate } from "react-router-dom";

const HeaderCartModal: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalProductsQuantity = useSelector(totalQuantity);
  const productsPrice = useSelector(totalProductsPrice).toLocaleString();

  const handleClickCart = () => {
    navigate("/cart");
    dispatch(hidePopup());
  };

  return (
    <div className={classes.cart__modal}>
      <div>
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
        <div className={classes.cart__modal__order}>
          <div className={classes.cart__modal__order_cost}>
            <h3>Итого:</h3>
            <h4>{productsPrice} ₽</h4>
          </div>
          <div className={classes.cart__modal__buttons}>
            <button
              onClick={handleClickCart}
              className={classes.cart__modal__button_order}
            >
              Оформить заказ
            </button>
            <button
              onClick={handleClickCart}
              className={classes.cart__modal__button_cart}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCartModal;
