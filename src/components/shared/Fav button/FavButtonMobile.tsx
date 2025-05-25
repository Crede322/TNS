import { useState, useEffect } from "react";
import favImg from "../../../img/favorite.svg";
import favColored from "../../../img/favoriteColored.svg";
import favPressed from "../../../img/favoritePressed.svg";
import {
  putFavoriteData,
  selectFavorites,
} from "../../../features/favoriteSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classes from "./FavButtonMobile.module.css";

interface FavButtonProps {
  id?: number;
}

const FavButton: React.FC<FavButtonProps> = ({ id }) => {
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

  return (
    <button className={classes.fav__button} onClick={handleFavButton}>
      <img src={!isProductFaved ? favImg : favPressed} alt="favorite" />
      <p>В избранное</p>
    </button>
  );
};

export default FavButton;
