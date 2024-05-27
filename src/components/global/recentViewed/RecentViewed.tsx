import classes from "./RecentViewed.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import RecentItem from "./RecentItem";

const RecentViewed = () => {
  const history = JSON.parse(localStorage.getItem("history") || "null");
  history.slice(-4).forEach((element: number) => console.log(element));

  return (
    <div className="recentViewed_wrapper">
      <Swiper slidesPerView={4.1}>
        {history.slice(-4).map((id: number, index: number) => (
          <SwiperSlide key={index}>
            <RecentItem historyObj={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentViewed;
