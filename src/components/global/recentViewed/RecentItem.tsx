import { useEffect, useState } from "react";
import { supabase } from "../../../helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import classes from "./RecentViewed.module.css";
import FavButton from "../../shared/Fav button/FavButton";
import CartButton from "../../shared/cart button/CartButton";

interface RecentItemProps {
  historyObj: number;
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

const RecentItem: React.FC<RecentItemProps> = ({ historyObj }) => {
  const [productData, setProductData] = useState<ProductTypes | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilteredData = async (historyObj: number) => {
      try {
        const { data } = await supabase
          .from("cpu")
          .select("*")
          .eq("id", historyObj);
        if (data) {
          setProductData(data[0]);
        }
      } catch (error) {
        console.error("ошибка supabase из истории товаров", error);
      }
    };
    fetchFilteredData(historyObj);
  }, []);

  if (!productData) {
    return <div></div>;
  }

  const handleProductClick = () => {
    navigate(`/product/${historyObj}`);
  };

  return (
    <div className={classes.item_card}>
      <div className={classes.img_container} onClick={handleProductClick}>
        <img src={productData.img} alt="recent viewed item" />
      </div>
      <h2 onClick={handleProductClick}>
        {productData.cpuName} [{productData.socket}, {productData.coresNumber} x{" "}
        {productData.frequency} ГГц, L2 - {productData.cacheL2} МБ, L3 -{" "}
        {productData.cacheL3} МБ, {productData.ramChannels} x {productData.DDR}-
        {productData.ramFrequency}МГц, {productData.TDP} Вт]
      </h2>
      <div className={classes.item_buttons}>
        <div className={classes.item_cost}>
          <h1>{productData.price}</h1>
        </div>
        <FavButton buttonStyle="mainpage" id={productData.id} />
        <CartButton id={productData.id} cartStyle="mainpage" />
      </div>
    </div>
  );
};

export default RecentItem;
