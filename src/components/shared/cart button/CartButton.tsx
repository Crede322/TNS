import classes from "./CartButton.module.css";
import cartImg from "../../../img/cart.svg";
import { useDispatch } from "react-redux";
import { putCartData } from "../../../features/cartSlice";

interface CartButtonProps {
  id: number;
}

const CartButton: React.FC<CartButtonProps> = ({ id }) => {
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(putCartData({ productId: id, quantity: "1unit" }));
  };

  return (
    <button className={classes.cart__button} onClick={handleCartClick}>
      <img src={cartImg} alt="cart" />
    </button>
  );
};

export default CartButton;
