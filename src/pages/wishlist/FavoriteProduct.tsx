import { useState, useEffect } from "react";
import { supabase } from "../../helper/supabaseClient";
import FavButton from "../../components/shared/Fav button/FavButton";
import classes from "./Wishlist.module.css";
import { useNavigate } from "react-router-dom";
import CartButton from "../../components/shared/cart button/CartButton";

interface FavoriteProductProps {
  id: string;
}

interface Product {
  id: number;
  cpuName: string;
  price: string;
  socket: string;
  coresNumber: number;
  frequency: string;
  ramChannels: number;
  ramFrequency: number;
  TDP: number;
  cacheL2: number;
  cacheL3: number;
  img: string;
}

const FavoriteProduct: React.FC<FavoriteProductProps> = ({ id }) => {
  const [favoriteProductData, setFavoriteProductData] =
    useState<Product | null>(null);

  const fetchFilteredData = async (favoriteProduct: string) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("*")
        .in("id", [favoriteProduct]);
      if (data) {
        setFavoriteProductData(data[0]);
      }
    } catch (error) {
      console.error("Error fetching supabase favorite data", error);
    }
  };

  useEffect(() => {
    fetchFilteredData(id);
  }, []);

  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  if (!favoriteProductData) {
    return <div className={classes.favorite_product} />;
  }

  return (
    <div>
      <div className={classes.favorite_product}>
        <img
          src={favoriteProductData.img}
          alt="product img"
          className={classes.card_img}
          onClick={handleProductClick}
        />
        <div className={classes.favorite_product_card}>
          <h3 onClick={handleProductClick}>
            Процессор {favoriteProductData.cpuName} [
            {favoriteProductData.socket}, {favoriteProductData.coresNumber} x{" "}
            {favoriteProductData.frequency} ГГц, L2 -{" "}
            {favoriteProductData.cacheL2} МБ, L3 - {favoriteProductData.cacheL3}{" "}
            МБ, {favoriteProductData.ramChannels} x{" "}
            {favoriteProductData.ramFrequency} МГц, TDP{" "}
            {favoriteProductData.TDP} Вт]
          </h3>
          <div>
            <h2 className={classes.favorite_product_price}>
              {favoriteProductData?.price}
            </h2>
            <div className={classes.favorite_product_buttons}>
              <FavButton
                buttonStyle="wishlistpage"
                id={favoriteProductData.id}
              />
              <div className={classes.wrapper__cart_button}>
                <CartButton
                  id={favoriteProductData.id}
                  cartStyle="wishlistpage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
