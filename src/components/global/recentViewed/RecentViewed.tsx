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
        slidesPerView={4}
        className="recentViewed_wrapper"
        breakpoints={{
          1600: {
            slidesPerView: 4.45,
          },
          1360: {
            slidesPerView: 4.04,
          },
          1300: {
            slidesPerView: 3.55,
          },
          1100: {
            slidesPerView: 3.2,
          },
          900: {
            slidesPerView: 2.65,
          },
          750: {
            slidesPerView: 2.25,
          },
          600: {
            slidesPerView: 1.95,
          },
        }}
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
