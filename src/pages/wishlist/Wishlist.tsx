import Header from "../../components/global/header/Header";
import classes from "./Wishlist.module.css";
import FavoriteProduct from "./FavoriteProduct";
import { useEffect, useState } from "react";
import { selectFavorites } from "../../features/favoriteSlice";
import { useSelector } from "react-redux";
import noResultsImg from "../../img/searchPage/no results illust.jpg";
import BlueButton from "../../components/shared/BlueButton";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [storedFavorites, setStoredFavorites] = useState<string[]>([]);
  const favoriteList = useSelector(selectFavorites);
  const navigate = useNavigate();
  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, [favoriteList]);

  const handleClick = () => {
    navigate(`/catalog/`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const noResults = (
    <div className={classes.wishlist_noResults}>
      <h1>Избранное</h1>
      <div className={classes.wishlist_noResults_container}>
        <div className={classes.wishlist_noResults_info}>
          <img src={noResultsImg} alt="noResults" />
          <h3>В списке пока нет ни одного избранного товара</h3>
          <div className={classes.noResults_button}>
            <BlueButton
              width={170}
              height={44}
              text="Перейти в каталог"
              fontWeight={500}
              borderRadius={8}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <div className={classes.wishlist_background}>
        {favoriteList.length === 0 ? (
          noResults
        ) : (
          <div className={classes.wishlist_container}>
            <h1>Избранное</h1>
            {storedFavorites.map((id) => (
              <FavoriteProduct id={id} key={id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
