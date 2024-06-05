import classes from "./RecentViewed.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import RecentItem from "./RecentItem";
import { selectFavorites } from "../../../features/favoriteSlice";
import { useSelector } from "react-redux";

const RecentViewed = () => {
  const history = JSON.parse(localStorage.getItem("history") || "null");
  const wishlistIDs = useSelector(selectFavorites);
  console.log("detectIDS", wishlistIDs);

  if (history === null) {
    return <div></div>;
  }

  return (
    <div className={classes.recentViewed}>
      <h1>Вы недавно смотрели</h1>
      <Swiper slidesPerView={4} className="recentViewed_wrapper">
        {history.reverse().map((id: number, index: number) => (
          <SwiperSlide key={index}>
            <RecentItem historyObj={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentViewed;
