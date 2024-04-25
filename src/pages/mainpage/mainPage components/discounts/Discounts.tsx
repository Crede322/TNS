import React, { useState, useEffect } from "react";
import { supabase } from "../../../../helper/supabaseClient";
import classes from "./Discounts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "../../../../features/swiper/swiper.css";
import DiscountsSlide from "./discounts slide/DiscountsSlide";

interface Item {
  id: number;
  cpuName: string;
  socket: string;
  threads: number;
  cacheL2: string;
}

const Discounts = () => {
  const [cpus, setCpus] = useState<Item[]>([]);
  const cpuIds = [15, 18, 8, 17, 16, 12];

  useEffect(() => {
    getCpusByIds(cpuIds);
  }, []);

  async function getCpusByIds(ids: number[]) {
    try {
      const { data, error } = await supabase.from("cpu").select().in("id", ids);

      if (error) {
        throw error;
      }

      if (data) {
        setCpus(data);
      }
    } catch (error) {
      console.error("Ошибка получения данных:", (error as Error).message);
    }
  }

  return (
    <div className="discount_wrapper">
      <Swiper slidesPerView={4.2}>
        <SwiperSlide style={{ marginRight: "10px" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
        <SwiperSlide style={{ margin: "0 10px 0 0" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
        <SwiperSlide style={{ margin: "0 10px 0 0" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
        <SwiperSlide style={{ margin: "0 10px 0 0" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
        <SwiperSlide style={{ margin: "0 10px 0 0" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
        <SwiperSlide style={{ margin: "0 10px 0 0" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
        <SwiperSlide style={{ margin: "0 10px 0 0" }}>
          <DiscountsSlide
            title="Ещё 3 дня скидка"
            description="процессор"
            price="4500 ₽"
            prevPrice="5200 ₽"
            link="asasdf"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Discounts;
