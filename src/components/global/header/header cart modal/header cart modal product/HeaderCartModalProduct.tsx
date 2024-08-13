import useCartModalSupabaseFetch from "../../../../../hooks/useCartModalSupabaseFetch";
import classes from "./HeaderCartModalProduct.module.css";
import { useSelector } from "react-redux";
import { selectCart, hidePopup } from "../../../../../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

interface ProductProps {
  id: number;
}

const HeaderCartModalProduct: React.FC<ProductProps> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const { product } = useCartModalSupabaseFetch(id);
  const productQuantity = cart.find(
    (product) => product.productId === id,
  )?.quantity;
  const productPrice = parseFloat(
    product?.price.replace(/[^0-9.]/g, "") || "0",
  );
  const productSumPrice = productQuantity ? productQuantity * productPrice : 0;
  const formattedSumPrice = productSumPrice.toLocaleString();

  const handleClickProduct = () => {
    navigate(`/product/${id}`);
    dispatch(hidePopup());
  };

  if (!product) {
    return <div></div>;
  }

  return (
    <div className={classes.modal__product}>
      <div className={classes.modal__product_container}>
        <img onClick={handleClickProduct} src={product.img} alt="product" />
        <div>
          <h2 onClick={handleClickProduct}>{product.cpuName}</h2>
          <h3>{productQuantity} шт.</h3>
        </div>
      </div>
      <span>{formattedSumPrice} ₽</span>
    </div>
  );
};

export default HeaderCartModalProduct;
