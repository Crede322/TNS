import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "../../../../features/swiper/swiper.css";
import DiscountsSlide from "./discounts slide/DiscountsSlide";

const Discounts = () => {
  return (
    <div className="discount_wrapper">
      <Swiper slidesPerView={4}>
        <SwiperSlide style={{ marginRight: "10px" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="AMD Ryzen Threadripper 3960X"
            price="120 000 ₽"
            prevPrice="140 000 ₽"
            link="https://vk.com/im?sel=c460"
            img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/15"
            imgWidth="150px"
            imgRight="0px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountsSlide
            title="Ещё 2 дня скидка"
            description="AMD Ryzen 9 7950X3D"
            price="60 000 ₽"
            prevPrice="65 000 ₽"
            link="https://vk.com/im?sel=c460"
            img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/18"
            imgWidth="130px"
            imgBottom="-10px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="AMD FX-8350"
            price="5 000 ₽"
            prevPrice="6 000 ₽"
            link="https://vk.com/im?sel=c460"
            img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/19"
            imgWidth="130px"
            imgBottom="-10px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountsSlide
            title="Ещё 1 день скидка"
            description="AMD Ryzen 5 5600X"
            price="12 600 ₽"
            prevPrice="14 000 ₽"
            link="https://vk.com/im?sel=c460"
            img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/20"
            imgWidth="130px"
            imgBottom="-10px"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Discounts;
