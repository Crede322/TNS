import classes from "./RecentViewed.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import RecentItem from "./RecentItem";

import { Navigation } from "swiper/modules";

const RecentViewed = () => {
  const history = JSON.parse(localStorage.getItem("history") || "null");

  if (history === null) {
    return <div></div>;
  }

  return (
    <div className={classes.recentViewed}>
      <h1>Вы недавно смотрели</h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView="auto"
        className="recentViewed_wrapper"
      >
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
