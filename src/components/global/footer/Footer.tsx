import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h1>TNS</h1>
        <ul className={classes.footer_list}>
          <div className={classes.footer_row}>
            <h2 className={classes.footer_title}>Компания</h2>
            <Link to="/help">О Компании</Link>
            <Link to="/help">Новости</Link>
            <Link to="/help">Партнерам</Link>
            <Link to="/help">Вакансии</Link>
            <Link to="/help">Политика конфиденциальности</Link>
            <Link to="/help">Персональные данные</Link>
            <Link to="/help">Правила продаж</Link>
            <Link to="/help">Сервисные центры</Link>
          </div>
          <div className={`${classes.footer_row} ${classes.row_two}`}>
            <h2 className={`${classes.footer_title} ${classes.title_two}`}>
              Покупателям
            </h2>
            <ul className={classes.title_two_divider}>
              <li>
                <Link to="/help">Как оформлять заказ</Link>
                <Link to="/help">Способы оплаты</Link>
                <Link to="/help">Доставка</Link>
                <Link to="/help">Статус заказа</Link>
                <Link to="/help">Обмен, возврат, гарантия</Link>
                <Link to="/help">Проверка статуса ремонта</Link>
              </li>
              <li>
                <Link to="/help">Юридическим лицам</Link>
                <Link to="/help">Проверка счёта</Link>
                <Link to="/help">Корпоративные отделы</Link>
                <Link to="/help">Бонусная программа</Link>
                <Link to="/help">Помощь</Link>
                <Link to="/help">Обратная связь</Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
