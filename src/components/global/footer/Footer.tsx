import classes from "./Footer.module.css";
import HeaderNav from "../header/HeaderNav";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h1>TNS</h1>
        <ul className={classes.footer_list}>
          <div className={classes.footer_row}>
            <h2 className={classes.footer_title}>Компания</h2>
            <a href="!#">О Компании</a>
            <a href="!#">Новости</a>
            <a href="!#">Партнерам</a>
            <a href="!#">Вакансии</a>
            <a href="!#">Политика конфиденциальности</a>
            <a href="!#">Персональные данные</a>
            <a href="!#">Правила продаж</a>
            <a href="!#">Сервисные центры</a>
          </div>
          <div className={`${classes.footer_row} ${classes.row_two}`}>
            <h2 className={`${classes.footer_title} ${classes.title_two}`}>
              Покупателям
            </h2>
            <div className={classes.title_two_divider}>
              <div>
                <a href="!#">Как оформлять заказ</a>
                <a href="!#">Способы оплаты</a>
                <a href="!#">Доставка</a>
                <a href="!#">Статус заказа</a>
                <a href="!#">Обмен, возврат, гарантия</a>
                <a href="!#">Проверка статуса ремонта</a>
              </div>
              <div style={{ marginLeft: "80px" }}>
                <a href="!#">Юридическим лицам</a>
                <a href="!#">Проверка счёта</a>
                <a href="!#">Корпоративные отделы</a>
                <a href="!#">Бонусная программа</a>
                <a href="!#">Помощь</a>
                <a href="!#">Обратная связь</a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
