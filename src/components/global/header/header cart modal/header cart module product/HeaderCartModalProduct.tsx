import useCartModalSupabaseFetch from "../../../../../hooks/useCartModalSupabaseFetch";
import classes from "./HeaderCartModalProduct.module.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../../features/cartSlice";

interface ProductProps {
  id: number;
}

const HeaderCartModalProduct: React.FC<ProductProps> = ({ id }) => {
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

  if (!product) {
    return <div></div>;
  }

  return (
    <div className={classes.modal__product}>
      <div className={classes.modal__product_container}>
        <img src={product.img} alt="product" />
        <div>
          <h2>{product.cpuName}</h2>
          <h3>{productQuantity} шт.</h3>
        </div>
      </div>
      <span>{formattedSumPrice} ₽</span>
    </div>
  );
};

export default HeaderCartModalProduct;
