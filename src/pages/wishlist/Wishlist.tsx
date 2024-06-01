import React, { useEffect } from "react";
import Header from "../../components/global/header/Header";
import { supabase } from "../../helper/supabaseClient";
import classes from "./Wishlist.module.css";

interface product {
  id: number;
  cpuName: string;
  price: string;
  socket: string;
  coresNumber: number;
  frequency: string;
  cacheL2: number;
  cacheL3: number;
  img: string;
}

const Wishlist = () => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    fetchFilteredData(favorites);
  }, []);

  const fetchFilteredData = async (favorites: Array<number>) => {
    try {
      const { data } = await supabase
        .from("cpu")
        .select("*")
        .in("id", [favorites]);
      if (data) {
        console.log("успешно получены данные фаворитов ", data);
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
          <div className={classes.wishlist_management}></div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
