import classes from "./Mainpage.module.css";
import ReduxTester from "../../components/divided/ReduxTester";
import { Carousel } from "react-responsive-carousel";
import MenuButton from "../../components/divided/MenuButton";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Mainpage = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.menu__row}>
        <MenuButton
          width={283}
          height={206}
          title="Личный кабинет"
          text="Получайте бонусы, отслеживайте заказы и делитесь мнением"
          background="aqua"
          innerButton={true}
        />
        <MenuButton
          width={183}
          height={206}
          title="Каталог"
          text="Большой выбор комплектующих"
          background="aqua"
        />
        <MenuButton
          width={183}
          height={206}
          title="Акции"
          text="Скидки, рассрочки, выгодные комплекты"
          background="aqua"
        />
        <MenuButton
          width={183}
          height={206}
          title="Собрать ПК"
          text="Без проблем с совместимостью"
          background="aqua"
        />
        <MenuButton
          width={183}
          height={206}
          title="Готовые сборки"
          text="Горячие сборки ПК от пользователей"
          background="aqua"
        />
        <MenuButton
          width={183}
          height={206}
          title="Сервис"
          text="Гарантия, возврат, обмен и ремонт"
          background="aqua"
        />
        <MenuButton
          width={183}
          height={206}
          title="Тесты"
          text="Проверка и идентификация комплектующих вашего ПК"
          background="aqua"
        />
        <MenuButton
          width={183}
          height={206}
          title="Помощь"
          text="Частые вопросы, полезная информация"
          background="aqua"
        />
      </ul>
      <div className={classes.slider__wrapper}>
        <Carousel
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <button
                className={classes.control__prev}
                onClick={clickHandler}
              />
            );
          }}
        >
          <div className={classes.slide}>123</div>
          <div>123</div>
          <div>123</div>
        </Carousel>
      </div>
    </div>
  );
};

export default Mainpage;
