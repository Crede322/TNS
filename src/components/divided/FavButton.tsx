import React, { useState, useEffect } from "react";
import favImg from "../../img/favorite.svg";
import favColored from "../../img/favoriteColored.svg";
import classes from "./FavButton.module.css";
import { putFavoriteData } from "../../features/favoriteSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../features/favoriteSlice";

interface FavButtonProps {
  favStyle: string;
  id?: number;
}

const FavButton: React.FC<FavButtonProps> = ({ favStyle, id }) => {
  const [isProductFaved, setIsProductFaved] = useState(false);
  const dispatch = useDispatch();
  const wishlistIDs = useSelector(selectFavorites);

  useEffect(() => {
    if (id !== undefined && wishlistIDs.includes(id)) {
      setIsProductFaved(true);
    } else {
      setIsProductFaved(false);
    }
  }, [wishlistIDs, id]);

  const handleFavButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    dispatch(putFavoriteData(id));
  };

  //стили
  let style;
  let wrapper;

  if (favStyle === "mainFav") {
    wrapper = {
      height: "44px",
      width: "44px",
      border: isProductFaved ? "1px solid #0080f5" : "1px solid #d9d9d9",
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
    <button
      className={classes.fav_wrapper}
      style={wrapper}
      onClick={handleFavButton}
    >
      <img
        src={isProductFaved ? favColored : favImg}
        alt="fav icon"
        style={style}
      />
    </button>
  );
};

export default FavButton;
