import MenuButton from "../menu button/MenuButton";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "../../../../features/swiper/swiper.css";
import catalogueImg from "../../../../img/mainMenu/catalogueImg.png";
import megaphoneImg from "../../../../img/mainMenu/megaphoneImg.png";
import cpuImg from "../../../../img/mainMenu/cpuImg.png";
import doubleArrow from "../../../../img/mainMenu/doubleArrow.png";
import shieldImg from "../../../../img/mainMenu/shieldImg.png";
import gear from "../../../../img/mainMenu/gear.png";
import question from "../../../../img/mainMenu/question.png";
import classes from "../../MainPage.module.css";
import MenuButtonMain from "../menu button/MenuButtonMain";

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
      <MenuButtonMain />
      <div className={classes.rightside__menu}>
        <Swiper
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView="auto"
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
              link="https://crede322.github.io/TNS/#/mockup"
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
              link="https://crede322.github.io/TNS/#/mockup"
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
              link="https://crede322.github.io/TNS/#/mockup"
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
              link="https://crede322.github.io/TNS/#/mockup"
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
              link="https://crede322.github.io/TNS/#/mockup"
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
              link="https://crede322.github.io/TNS/#/mockup"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainpageSwiper;
