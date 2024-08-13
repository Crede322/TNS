import { useNavigate } from "react-router-dom";
import classes from "./RecentViewed.module.css";
import FavButton from "../../shared/Fav button/FavButton";
import CartButton from "../../shared/cart button/CartButton";
import useSupabaseFetch from "../../../hooks/useSupabaseFetch";

interface RecentItemProps {
  historyObj: number;
}

const RecentItem: React.FC<RecentItemProps> = ({ historyObj }) => {
  const navigate = useNavigate();
  const { product } = useSupabaseFetch(historyObj);

  if (!product) {
    return <div></div>;
  }

  const handleProductClick = () => {
    navigate(`/product/${historyObj}`);
  };

  return (
    <div className={classes.item_card}>
      <div className={classes.img_container} onClick={handleProductClick}>
        <img src={product.img} alt="recent viewed item" />
      </div>
      <h2 onClick={handleProductClick}>
        {product.cpuName} [{product.socket}, {product.coresNumber} x{" "}
        {product.frequency} ГГц, L2 - {product.cacheL2} МБ, L3 -{" "}
        {product.cacheL3} МБ, {product.ramChannels} x {product.DDR}-
        {product.ramFrequency}МГц, {product.TDP} Вт]
      </h2>
      <div className={classes.item_buttons}>
        <div className={classes.item_cost}>
          <h1>{product.price}</h1>
        </div>
        <FavButton buttonStyle="mainpage" id={+product.id} />
        <CartButton id={+product.id} cartStyle="mainpage" />
      </div>
    </div>
  );
};

export default RecentItem;
