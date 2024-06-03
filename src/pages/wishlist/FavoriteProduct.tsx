import React, { useState, useEffect } from "react";
import { supabase } from "../../helper/supabaseClient";
import FavButton from "../../components/divided/FavButton";
import classes from "./Wishlist.module.css";

interface FavoriteProductProps {
  id: number;
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
  const [favoriteProductData, setFavoriteProductData] = useState<Product>();

  const fetchFilteredData = async (favoriteProduct: number) => {
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

  return (
    <div>
      {id}
      <div className={classes.favorite_product}>
        <img src={favoriteProductData?.img} alt="product img" />
        <h3>
          {favoriteProductData?.cpuName} [{favoriteProductData?.socket},{" "}
          {favoriteProductData?.coresNumber} x {favoriteProductData?.frequency}{" "}
          ГГц, L2 - {favoriteProductData?.cacheL2} МБ, L3 -{" "}
          {favoriteProductData?.cacheL3} МБ, {favoriteProductData?.ramChannels}{" "}
          x {favoriteProductData?.ramFrequency} МГц, TDP{" "}
          {favoriteProductData?.TDP} Вт]
        </h3>
        <div>
          <h2>{favoriteProductData?.price}</h2>
          <FavButton favStyle="mainFav" id={favoriteProductData?.id} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
