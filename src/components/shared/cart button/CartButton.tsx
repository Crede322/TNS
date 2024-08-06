import classes from "./CartButton.module.css";
import cartImg from "../../../img/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCartData, selectCart } from "../../../features/cartSlice";
import checkmark from "../../../img/checkmark.svg"

interface CartButtonProps {
  id: number;
}

const CartButton: React.FC<CartButtonProps> = ({ id }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const isInCart = cart.some(product => product.productId === id);

  const handleCartClick = () => {
    dispatch(addCartData({ productId: id }));
  };

  const pressStyle = {
    border: isInCart ? "1px solid #0080f5" : "1px solid #d9d9d9"
  }

  return (
    <button className={classes.cart__button} style={pressStyle} onClick={handleCartClick}>
      <img src={isInCart ? checkmark : cartImg} alt="cart" />
    </button>
  );
};

export default CartButton;
