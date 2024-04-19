import classes from "./Mainpage.module.css";
import ReduxTester from "../../components/divided/ReduxTester";
import MenuButton from "../../components/divided/MenuButton";
import "../../features/swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../../features/swiper/swiper.css";
import phoneImg from "../../img/mainMenu/phoneImg.jpg";
import catalogueImg from "../../img/mainMenu/catalogueImg.png";
import megaphoneImg from "../../img/mainMenu/megaphoneImg.png";
import assemblePC from "../../img/mainMenu/assemblePC.png";
import fireEmoji from "../../img/mainMenu/fireEmoji.png";

const Mainpage = () => {
  return (
    <div className={classes.wrapper}>
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
            slidesPerView={6}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
          >
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Каталог"
                text="Большой выбор комплектующих"
                background="rgb(229, 244, 251)"
                imageSrc={catalogueImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Акции"
                text="Скидки, рассрочки, выгодные комплекты"
                background="rgb(235, 255, 237)"
                imageSrc={megaphoneImg}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Собрать ПК"
                text="Без проблем с совместимостью"
                background="rgb(242, 243, 245)"
                imageSrc={assemblePC}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Готовые сборки"
                text="Горячие сборки ПК от пользователей"
                background="rgb(255, 239, 239)"
                imageSrc={fireEmoji}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Сервис"
                text="Гарантия, возврат, обмен и ремонт"
                background="rgb(236, 249, 255)"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Тесты"
                text="Проверка и идентификация комплектующих вашего ПК"
                background="rgb(252, 246, 215)"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MenuButton
                width={183}
                height={206}
                title="Помощь"
                text="Частые вопросы, полезная информация"
                background="rgb(255, 239, 239)"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
