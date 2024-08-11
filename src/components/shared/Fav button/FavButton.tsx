import { useState, useEffect } from "react";
import favImg from "../../../img/favorite.svg";
import favColored from "../../../img/favoriteColored.svg";
import favPressed from "../../../img/favoritePressed.svg";
import classes from "./FavButton.module.css";
import {
  putFavoriteData,
  selectFavorites,
} from "../../../features/favoriteSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface FavButtonProps {
  buttonStyle: string;
  id?: number;
}

const FavButton: React.FC<FavButtonProps> = ({ buttonStyle, id }) => {
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

  const mainpageStyle = {
    border: isProductFaved ? "1px solid #0080f5" : "1px solid #d9d9d9",
  };
  const productpageStyle = {
    border: isProductFaved ? "1px solid #0080f5" : "1px solid #d9d9d9",
  };
  const wishlistpageStyle = {
    border: "1px solid #e5e5e5",
  };

  return (
    <div>
      {buttonStyle === "mainpage" ? (
        <button
          className={classes.button__mainpage}
          onClick={handleFavButton}
          style={mainpageStyle}
        >
          <img src={isProductFaved ? favColored : favImg} alt="favorite" />
        </button>
      ) : buttonStyle === "productpage" ? (
        <button
          className={classes.button__productpage}
          onClick={handleFavButton}
          style={productpageStyle}
        >
          <img src={isProductFaved ? favColored : favImg} alt="favorite" />
        </button>
      ) : buttonStyle === "wishlistpage" ? (
        <button
          className={classes.button__wishlistpage}
          onClick={handleFavButton}
          style={wishlistpageStyle}
        >
          <img src={favPressed} alt="favorite" />
        </button>
      ) : null}
    </div>
  );
};

export default FavButton;
