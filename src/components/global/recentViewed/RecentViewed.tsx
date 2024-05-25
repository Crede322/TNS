import React from "react";
import classes from "./RecentViewed.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

const RecentViewed = () => {
  return (
    <div className="recentViewed_wrapper">
      <Swiper slidesPerView={4}>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <h2>123</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecentViewed;
