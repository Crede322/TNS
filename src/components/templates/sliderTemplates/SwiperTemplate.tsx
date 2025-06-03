import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import RecentItem from "../../global/recentViewed/RecentItem";
import classes from "./SwiperTemplate.module.css";

interface Props {
  productList: number[];
}

export default function SliderTemplate({ productList }: Props) {
  return (
    <div className={classes.wrapper}>
      <Swiper slidesPerView="auto" className={classes.swiper}>
        {productList.map((id) => (
          <SwiperSlide className={classes.slide} key={id}>
            <RecentItem historyObj={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
