import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h1>TNS</h1>
        <ul className={classes.footer_list}>
          <div className={classes.footer_row}>
            <h2 className={classes.footer_title}>Компания</h2>
            <a href="https://crede322.github.io/TNS/#/mockup">О Компании</a>
            <a href="https://crede322.github.io/TNS/#/mockup">Новости</a>
            <a href="https://crede322.github.io/TNS/#/mockup">Партнерам</a>
            <a href="https://crede322.github.io/TNS/#/mockup">Вакансии</a>
            <a href="https://crede322.github.io/TNS/#/mockup">
              Политика конфиденциальности
            </a>
            <a href="https://crede322.github.io/TNS/#/mockup">
              Персональные данные
            </a>
            <a href="https://crede322.github.io/TNS/#/mockup">Правила продаж</a>
            <a href="https://crede322.github.io/TNS/#/mockup">
              Сервисные центры
            </a>
          </div>
          <div className={`${classes.footer_row} ${classes.row_two}`}>
            <h2 className={`${classes.footer_title} ${classes.title_two}`}>
              Покупателям
            </h2>
            <div className={classes.title_two_divider}>
              <div>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Как оформлять заказ
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Способы оплаты
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">Доставка</a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Статус заказа
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Обмен, возврат, гарантия
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Проверка статуса ремонта
                </a>
              </div>
              <div style={{ marginLeft: "80px" }}>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Юридическим лицам
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Проверка счёта
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Корпоративные отделы
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Бонусная программа
                </a>
                <a href="https://crede322.github.io/TNS/#/mockup">Помощь</a>
                <a href="https://crede322.github.io/TNS/#/mockup">
                  Обратная связь
                </a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
