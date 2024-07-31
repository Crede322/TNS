import { useState, useEffect } from "react";
import { supabase } from "../../../helper/supabaseClient";
import classes from "./CartPageProduct.module.css";
import FavButton from "../../../components/shared/Fav button/FavButton";
import iconDelete from "../../../img/trash-bin.svg";
import { useDispatch } from "react-redux";
import { putCartData } from "../../../features/cartSlice";

interface CartPageProductProps {
  productId: number;
  quantity: number;
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

const CartPageProduct: React.FC<CartPageProductProps> = ({
  productId,
  quantity,
}) => {
  const [productData, setProductData] = useState<ProductTypes | null>(null);
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const dispatch = useDispatch()

  const buttonIncrement = () => {
    setInputQuantity(inputQuantity + 1)
    dispatch(putCartData({ productId: productId, quantity: inputQuantity }));
  };
  const buttonDecrement = () => {
    setInputQuantity(inputQuantity - 1)
    dispatch(putCartData({ productId: productId, quantity: inputQuantity }));
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
        console.error("ошибка supabase из истории товаров", error);
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
          <h2>{productData.cpuName}</h2>
          <div className={classes.product__container_count}>
            <button onClick={buttonDecrement}>
              <h3>-</h3>
            </button>
            <h4>{inputQuantity}</h4>
            <button onClick={buttonIncrement}>
              <h3>+</h3>
            </button>
          </div>
        </div>
        <FavButton favStyle="mainFav" />
        <button className={classes.button__delete}>
          <img src={iconDelete} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default CartPageProduct;
