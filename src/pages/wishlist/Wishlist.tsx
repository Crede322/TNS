import React, { useEffect } from "react";
import Header from "../../components/global/header/Header";
import classes from "./Wishlist.module.css";

// supabase
import { supabase } from "../../helper/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { putFavoriteData, selectFavorites } from "../../features/favoriteSlice";
import { RootState } from "../../store/redux";

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

const Wishlist = () => {
  const dispatch = useDispatch();
  const favoriteData = useSelector((state: RootState) =>
    selectFavorites(state),
  ) as Product[];

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    fetchFilteredData(favorites);
  }, []);

  const fetchFilteredData = async (favorites: Array<number>) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("*")
        .in("id", favorites);
      if (data) {
        dispatch(putFavoriteData(data));
      }
    } catch (error) {
      console.error("Error fetching supabase filtered data", error);
    }
  };

  return (
    <div>
      <Header />
      <div className={classes.wishlist_background}>
        <div className={classes.wishlist_container}>
          <h1>Избранное</h1>
          {favoriteData.map((product) => (
            <div key={product.id} className={classes.favorite_product}>
              <img src={product.img} alt="product img" />
              <div className={classes.favorite_product_main}>
                <h2>
                  {product.cpuName} [{product.socket}, {product.coresNumber} x{" "}
                  {product.frequency} ГГц, L2 - {product.cacheL2} МБ, L3 -{" "}
                  {product.cacheL3} МБ, {product.ramChannels} x{" "}
                  {product.ramFrequency} МГц, TDP {product.TDP} Вт]
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
