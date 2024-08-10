import { useState, useEffect } from "react";
import { supabase } from "../../../helper/supabaseClient";
import classes from "./CartPageProduct.module.css";
import FavButton from "../../../components/shared/Fav button/FavButton";
import iconDelete from "../../../img/trash-bin.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartData,
  removeCartData,
  selectCart,
  deleteCartProduct,
} from "../../../features/cartSlice";
import { useNavigate } from "react-router-dom";

interface CartPageProductProps {
  productId: number;
}

interface ProductTypes {
  id: number;
  cpuName: string;
  price: string;
  img: string;
  socket: string;
  coresNumber: number;
  frequency: number;
  cacheL2: number;
  cacheL3: number;
  ramChannels: number;
  DDR: number;
  ramFrequency: number;
  TDP: number;
}

const CartPageProduct: React.FC<CartPageProductProps> = ({ productId }) => {
  const [productData, setProductData] = useState<ProductTypes | null>(null);
  const cart = useSelector(selectCart);
  const receivedproduct = cart.find(
    (product) => product.productId === productId,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${productId}`);
  };

  const buttonIncrement = () => {
    dispatch(addCartData({ productId: productId }));
  };
  const buttonDecrement = () => {
    dispatch(removeCartData({ productId: productId }));
  };

  const handleButtonDelete = () => {
    dispatch(deleteCartProduct({ productId }));
  };

  useEffect(() => {
    const fetchFilteredData = async (productId: number) => {
      try {
        const { data } = await supabase
          .from("cpu")
          .select("*")
          .eq("id", productId);
        if (data) {
          setProductData(data[0]);
        }
      } catch (error) {
        console.error("ошибка supabase из cart", error);
      }
    };
    fetchFilteredData(productId);
  }, []);

  if (!productData) {
    return <div></div>;
  }

  return (
    <div className={classes.product__wrapper}>
      <div className={classes.product__container}>
        <img
          src={productData.img}
          alt="product"
          className={classes.product__image}
        />
        <div className={classes.product__container_description}>
          <h2 onClick={handleProductClick}>Процессор {productData.cpuName}</h2>
          <div className={classes.product__container_count}>
            <button
              className={classes.button__decrement}
              onClick={buttonDecrement}
            />
            <h4>{receivedproduct ? receivedproduct.quantity : "null"}</h4>
            <button
              className={classes.button__increment}
              onClick={buttonIncrement}
            />
          </div>
          <span className={classes.product__price}>
            {productData.price} / шт
          </span>
        </div>
        <FavButton buttonStyle="mainpage" id={productId} />
        <button className={classes.button__delete} onClick={handleButtonDelete}>
          <img src={iconDelete} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default CartPageProduct;
