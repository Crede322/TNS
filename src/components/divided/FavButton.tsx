import React, { useState, useEffect } from "react";
import favImg from "../../img/favorite.svg";
import { putFavoriteData } from "../../features/favoriteSlice";
import { useDispatch } from "react-redux";

interface FavButtonProps {
  favStyle: string;
  id?: number;
}

const FavButton: React.FC<FavButtonProps> = ({ favStyle, id }) => {
  const [isProductFaved, setIsProductFaved] = useState(false);
  const dispatch = useDispatch();

  const handleFavButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    if (id !== undefined) {
      dispatch(putFavoriteData(id));
    } else {
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
