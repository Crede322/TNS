import Header from "../../components/global/header/Header";
import classes from "./Wishlist.module.css";
import FavoriteProduct from "./FavoriteProduct";
import { selectFavorites } from "../../features/favoriteSlice";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistIDs = useSelector(selectFavorites);
  console.log(wishlistIDs);

  return (
    <div>
      <Header />
      <div className={classes.wishlist_background}>
        <div className={classes.wishlist_container}>
          <h1>Избранное</h1>
          {wishlistIDs.map((id) => (
            <FavoriteProduct id={id} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
