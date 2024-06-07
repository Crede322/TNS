import React, { useState, useEffect } from "react";
import favImg from "../../img/favorite.svg";
import favColored from "../../img/favoriteColored.svg";
import favPressed from "../../img/favoritePressed.svg";
import classes from "./FavButton.module.css";
import { putFavoriteData, selectFavorites } from "../../features/favoriteSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface FavButtonProps {
  favStyle: string;
  id?: number;
}

const FavButton: React.FC<FavButtonProps> = ({ favStyle, id }) => {
  const [isProductFaved, setIsProductFaved] = useState(false);
  const dispatch = useDispatch();
  const wishlistIDs = useSelector(selectFavorites);

  const checkFavs = () => {
    if (id !== undefined && wishlistIDs.includes(id)) {
      setIsProductFaved(true);
    } else {
      setIsProductFaved(false);
    }
  };

  useEffect(() => {
    checkFavs();
  });

  const handleFavButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    dispatch(putFavoriteData(id));
  };

  const getClasses = () => {
    switch (favStyle) {
      case "mainPageStyle":
        return classes.mainPageStyle;
      case "wishlistStyle":
        return classes.productPageStyle;
      default:
        return classes.mainPageStyle;
    }
  };

  const getStyle = () => {
    switch (favStyle) {
      case "mainPageStyle":
        return {
          border: isProductFaved ? "1px solid #0080f5" : "1px solid #d9d9d9",
        };
      case "wishlistStyle":
        return {
          backgroundColor: "#f7f7f7",
        };
    }
  };

  return (
    <button
      className={getClasses()}
      onClick={handleFavButton}
      style={getStyle()}
    >
      <img
        src={
          favStyle === "wishlistStyle"
            ? favPressed
            : isProductFaved
            ? favColored
            : favImg
        }
        alt="fav icon"
      />
    </button>
  );
};

export default FavButton;
