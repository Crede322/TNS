import classes from "./CartButton.module.css";
import cartImg from "../../../img/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCartData, selectCart } from "../../../features/cartSlice";
import { useNavigate } from "react-router-dom";
import checkmark from "../../../img/checkmark.svg";

interface CartButtonProps {
  id: number;
  cartStyle: string;
}

const CartButton: React.FC<CartButtonProps> = ({ id, cartStyle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);

  const isInCart = cart.some((product) => product.productId === id);

  const handleCartClick = () => {
    if (!isInCart) {
      dispatch(addCartData({ productId: id }));
    } else {
      navigate("/cart");
    }
  };

  const pressStyle = {
    mainpage: { border: isInCart ? "1px solid #0080f5" : "1px solid #d9d9d9" },
    productpage: {
      border: isInCart ? "1px solid #0080f5" : "1px solid #0080f5",
      backgroundColor: isInCart ? "#fff" : "#0080f5",
      color: isInCart ? "#0080f5" : "#fff",
    },
    catalogpage: {
      border: isInCart ? "1px solid #0080f5" : "1px solid #0080f5",
      backgroundColor: isInCart ? "#fff" : "#0080f5",
      color: isInCart ? "#0080f5" : "#fff",
    },
  };

  return (
    <div>
      {cartStyle === "mainpage" ? (
        <button
          className={classes.cart__button_mainpage}
          style={pressStyle.mainpage}
          onClick={handleCartClick}
        >
          <img src={isInCart ? checkmark : cartImg} alt="cart" />
        </button>
      ) : cartStyle === "productpage" ? (
        <button
          className={classes.cart__button_productpage}
          style={pressStyle.productpage}
          onClick={handleCartClick}
        >
          {isInCart ? "В корзине" : "Купить"}
        </button>
      ) : cartStyle === "catalogpage" ? (
        <button
          className={classes.cart__button_catalogpage}
          style={pressStyle.catalogpage}
          onClick={handleCartClick}
        >
          {isInCart ? "В корзине" : "Купить"}
        </button>
      ) : null}
    </div>
  );
};

export default CartButton;
