import MenuButton from "../menu button/MenuButton";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "../../../../features/swiper/swiper.css";
import phoneImg from "../../../../img/mainMenu/phoneImg.jpg";
import catalogueImg from "../../../../img/mainMenu/catalogueImg.png";
import megaphoneImg from "../../../../img/mainMenu/megaphoneImg.png";
import cpuImg from "../../../../img/mainMenu/cpuImg.png";
import doubleArrow from "../../../../img/mainMenu/doubleArrow.png";
import shieldImg from "../../../../img/mainMenu/shieldImg.png";
import gear from "../../../../img/mainMenu/gear.png";
import question from "../../../../img/mainMenu/question.png";
import classes from "../../../../pages/mainpage/MainPage.module.css";

const sliderStyle = {
  maxWidth: "160px",
  cursor: "pointer",
};

const MainpageSwiper = () => {
  const navigate = useNavigate();

  const handleButtonCatalog = () => {
    navigate("/catalog");
  };

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
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 4.3,
            },
            1400: {
              slidesPerView: 5.8,
            },
            1300: {
              slidesPerView: 5.45,
            },
            1100: {
              slidesPerView: 5.1,
            },
            900: {
              slidesPerView: 4.7,
            },
            750: {
              slidesPerView: 4.5,
            },
            600: {
              slidesPerView: 4.1,
            },
          }}
        >
          <SwiperSlide style={sliderStyle} onClick={handleButtonCatalog}>
            <MenuButton
              width={183}
              height={206}
              title="Каталог"
              text="Большой выбор процессоров"
              background="rgb(189, 215, 255)"
              imageSrc={catalogueImg}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Акции"
              text="Скидки, рассрочки, выгодные комплекты"
              background="rgb(202, 238, 255)"
              imageSrc={megaphoneImg}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Подобрать CPU"
              text="Без проблем c совместимостью"
              background="rgb(218, 240, 252)"
              imageSrc={cpuImg}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Новинки"
              text="Лучшие в производительности"
              background="rgb(189, 215, 255)"
              imageSrc={doubleArrow}
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
              text="Проверка и идентификация процессоров"
              background="rgb(202, 238, 255)"
              imageSrc={gear}
            />
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>
            <MenuButton
              width={183}
              height={206}
              title="Помощь"
              text="Частые вопросы, полезная информация"
              background="rgb(218, 240, 252)"
              imageSrc={question}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainpageSwiper;
