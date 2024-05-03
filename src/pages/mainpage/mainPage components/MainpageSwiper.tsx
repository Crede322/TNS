import React from "react";
import MenuButton from "./menu button/MenuButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../../../features/swiper/swiper.css";
import phoneImg from "../../../img/mainMenu/phoneImg.jpg";
import catalogueImg from "../../../img/mainMenu/catalogueImg.png";
import megaphoneImg from "../../../img/mainMenu/megaphoneImg.png";
import assemblePC from "../../../img/mainMenu/assemblePC.png";
import fireEmoji from "../../../img/mainMenu/fireEmoji.png";
import shieldImg from "../../../img/mainMenu/shieldImg.png";
import gear from "../../../img/mainMenu/gear.png";
import question from "../../../img/mainMenu/question.png";
import classes from "../../../pages/mainpage/MainPage.module.css";

const sliderStyle = {
  maxWidth: "160px",
};

const MainpageSwiper = () => {
  return (
    <div className={classes.mainpage__row}>
      <MenuButton
        width={283}
        height={206}
        title="Личный кабинет"
        text="Получайте бонусы, отслеживайте заказы и делитесь мнением"
        background="#fff7da"
        innerButton={true}
        marginRight="10px"
        imageSrc={phoneImg}
      />
      <div className={classes.rightside__menu}>
        <Swiper
          slidesPerView={5.8}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
        >
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Каталог"
              text="Большой выбор комплектующих"
              background="rgb(229, 244, 251)"
              imageSrc={catalogueImg}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Акции"
              text="Скидки, рассрочки, выгодные комплекты"
              background="rgb(235, 255, 237)"
              imageSrc={megaphoneImg}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Собрать ПК"
              text="Без проблем c совместимостью"
              background="rgb(242, 243, 245)"
              imageSrc={assemblePC}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Готовые сборки"
              text="Горячие сборки ПК от пользователей"
              background="rgb(255, 239, 239)"
              imageSrc={fireEmoji}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Сервис"
              text="Гарантия, возврат, обмен и ремонт"
              background="rgb(236, 249, 255)"
              imageSrc={shieldImg}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Тесты"
              text="Проверка и идентификация комплектующих вашего ПК"
              background="rgb(252, 246, 215)"
              imageSrc={gear}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Помощь"
              text="Частые вопросы, полезная информация"
              background="rgb(255, 239, 239)"
              imageSrc={question}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainpageSwiper;
