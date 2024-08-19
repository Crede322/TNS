import classes from "./HeaderCartButton.module.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showPopup,
  hidePopup,
  cartOverlay,
  selectCart,
  totalQuantity,
  setTotalProductsPrice,
} from "../../../../features/cartSlice";
import { supabase } from "../../../../helper/supabaseClient";
import cartImg from "../../../../img/cart.svg";
import HeaderCartModal from "../header cart modal/HeaderCartModal";

const HeaderCartButton = () => {
  const cartOverlayShown = useSelector(cartOverlay);
  const cart = useSelector(selectCart);
  const cartLength = useSelector(totalQuantity);
  const [calculateProductPrices, setProductPrices] = useState<{
    [key: number]: number;
  }>({});

  const navigate = useNavigate();
  const handleClickCart = () => {
    navigate("/cart");
    dispatch(hidePopup());
  };

  const dispatch = useDispatch();
  const cartMouseEnter = () => {
    dispatch(showPopup());
  };
  const cartMouseLeave = () => {
    dispatch(hidePopup());
  };

  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  const disableEvents: React.CSSProperties = {
    pointerEvents: isCartPage ? "none" : "auto",
  };

  useEffect(() => {
    const fetchFilteredData = async (productIds: number[]) => {
      try {
        // Выполняем запрос к Supabase
        const { data, error } = await supabase
          .from("cpu")
          .select("id, price")
          .in("id", productIds);

        if (error) {
          throw error;
        }
        if (data) {
          // Преобразуем данные из Supabase в объект цен
          const prices = data.reduce<{ [key: number]: number }>((acc, item) => {
            // Убираем символы и пробелы из строки цены, чтобы получить число
            const priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            acc[item.id] = priceNumber;
            return acc;
          }, {});
          setProductPrices(prices);
        }
      } catch (error) {
        console.error(
          "Ошибка supabase при рассчёте цены товаров из cartModal",
          error,
        );
      }
    };

    // Передаем идентификаторы товаров в запрос
    const productIds = cart.map((item) => item.productId);
    fetchFilteredData(productIds);
  }, [cart]);

  useEffect(() => {
    // Рассчитываем общую стоимость при изменении productPrices и cart
    const calculateTotalCost = () => {
      const total = cart.reduce((acc, item) => {
        const price = calculateProductPrices[item.productId] || 0;
        return acc + price * item.quantity;
      }, 0);
      dispatch(setTotalProductsPrice(total));
    };

    calculateTotalCost();
  }, [calculateProductPrices, cart]);

  return (
    <div
      style={disableEvents}
      className={classes.menu__btn__wrapper}
      onMouseEnter={cartMouseEnter}
      onMouseLeave={cartMouseLeave}
    >
      <div
        className={classes.counter_badge}
        style={{ display: cartLength > 0 ? "flex" : "none" }}
      >
        {cartLength}
      </div>
      <button className={classes.menu__btn_cart} onClick={handleClickCart}>
        <img src={cartImg} alt="img_cart" />
        <h2>Корзина</h2>
      </button>
      {cartLength > 0 ? (
        <div>
          <div className={classes.cart__popup}>
            <HeaderCartModal />
          </div>
          {cartOverlayShown ? <div className={classes.cart__overlay} /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default HeaderCartButton;
