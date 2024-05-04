import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import amd from "../../../../img/mainMenu/brandsSwiper img/amd.png";
import intel from "../../../../img/mainMenu/brandsSwiper img/intel.png";
import classes from "./BrandsSwiper.module.css";

const BrandsSwiper = () => {
  return (
    <div className="brands_swiper_wrapper">
      <Swiper slidesPerView={9.7} spaceBetween={30}>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandsSwiper;
