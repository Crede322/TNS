import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import acer from "../../../../img/mainMenu/brandsSwiper img/acer.png";
import amd from "../../../../img/mainMenu/brandsSwiper img/amd.png";
import ardor from "../../../../img/mainMenu/brandsSwiper img/ardor.png";
import asus from "../../../../img/mainMenu/brandsSwiper img/asus.png";
import deepcool from "../../../../img/mainMenu/brandsSwiper img/deepcool.png";
import gigabyte from "../../../../img/mainMenu/brandsSwiper img/gigabyte.png";
import intel from "../../../../img/mainMenu/brandsSwiper img/intel.png";
import kingston from "../../../../img/mainMenu/brandsSwiper img/kingston.png";
import msi from "../../../../img/mainMenu/brandsSwiper img/msi.png";
import palit from "../../../../img/mainMenu/brandsSwiper img/palit.png";
import samsung from "../../../../img/mainMenu/brandsSwiper img/samsung.png";
import sony from "../../../../img/mainMenu/brandsSwiper img/sony.png";
import xpg from "../../../../img/mainMenu/brandsSwiper img/xpg.png";
import classes from "./BrandsSwiper.module.css";

const BrandsSwiper = () => {
  return (
    <div className={classes.wrapper}>
      <Swiper slidesPerView={10} spaceBetween={30}>
        <SwiperSlide className={classes.slide}>
          <img src={acer} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={amd} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={ardor} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={asus} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={deepcool} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={gigabyte} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={intel} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={kingston} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={msi} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={palit} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={samsung} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={sony} alt="brand logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={xpg} alt="brand logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandsSwiper;
