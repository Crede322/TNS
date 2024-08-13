import { useNavigate } from "react-router-dom";
import classes from "../Wishlist.module.css";
import FavButton from "../../../components/shared/Fav button/FavButton";
import CartButton from "../../../components/shared/cart button/CartButton";
import useSupabaseFetch from "../../../hooks/useSupabaseFetch";

interface FavoriteProductProps {
  id: number;
}

const FavoriteProduct: React.FC<FavoriteProductProps> = ({ id }) => {
  const { product } = useSupabaseFetch(id);

  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  if (!product) {
    return <div className={classes.favorite_product} />;
  }

  return (
    <div>
      <div className={classes.favorite_product}>
        <img
          src={product.img}
          alt="product img"
          className={classes.card_img}
          onClick={handleProductClick}
        />
        <div className={classes.favorite_product_card}>
          <h3 onClick={handleProductClick}>
            Процессор {product.cpuName} [{product.socket}, {product.coresNumber}{" "}
            x {product.frequency} ГГц, L2 - {product.cacheL2} МБ, L3 -{" "}
            {product.cacheL3} МБ, {product.ramChannels} x {product.ramFrequency}{" "}
            МГц, TDP {product.TDP} Вт]
          </h3>
          <div>
            <h2 className={classes.favorite_product_price}>{product?.price}</h2>
            <div className={classes.favorite_product_buttons}>
              <FavButton buttonStyle="wishlistpage" id={+product.id} />
              <div className={classes.wrapper__cart_button}>
                <CartButton id={+product.id} cartStyle="wishlistpage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
