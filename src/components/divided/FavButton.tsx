import React, { useState, useEffect } from "react";
import favImg from "../../img/favorite.svg";
import { supabase } from "../../helper/supabaseClient";
import { useDispatch } from "react-redux";
import { putFavoriteData } from "../../features/favoriteSlice";

interface FavButtonProps {
  favStyle: string;
  id: number | undefined;
}

const FavButton: React.FC<FavButtonProps> = ({ favStyle, id }) => {
  const [isProductFaved, setIsProductFaved] = useState(false);
  const dispatch = useDispatch();
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  // клик на кнопку и localStorage
  const handleFavButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsProductFaved(true);
      fetchFilteredData(favorites);
    } else {
      const removeProductFromFavs = favorites.filter(
        (item: number) => item !== id,
      );
      localStorage.setItem("favorites", JSON.stringify(removeProductFromFavs));
      setIsProductFaved(false);
      fetchFilteredData(favorites);
    }
  };

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
      console.error("Error fetching supabase favorite data", error);
    }
  };

  //стили
  let style;
  let wrapper;

  if (favStyle === "mainFav") {
    wrapper = {
      height: "44px",
      width: "44px",
      border: "1px solid #d9d9d9",
      borderRadius: "8px",
    };
    style = {
      width: "20px",
      height: "20px",
    };
  } else if (favStyle === "headerFav") {
    style = {
      width: "40px",
      height: "40px",
    };
  }

  return (
    <button style={wrapper} onClick={handleFavButton}>
      <img src={favImg} alt="fav icon" style={style} />
      {isProductFaved ? "true" : "false"}
    </button>
  );
};

export default FavButton;
