import classes from "./HeaderCartModal.module.css";
import { totalProductsPrice } from "../../../../features/cartSlice";
import { useSelector } from "react-redux";

const HeaderCartModal: React.FC = () => {
  const totalPrice = useSelector(totalProductsPrice);

  return (
    <div className={classes.cart__modal}>
      header cart modal
      <span> {totalPrice.toLocaleString()} ₽</span>
    </div>
  );
};

export default HeaderCartModal;
