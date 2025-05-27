import classes from "./MenuButtonMain.module.css";
import { Link } from "react-router-dom";
import phoneImg from "../../../../img/mainMenu/phoneImg.jpg";

export default function MenuButtonMain() {
  return (
    <Link className={classes.button} to="/">
      <h3>Личный кабинет</h3>
      <h4>Получайте бонусы, отслеживайте заказы и делитесь мнением</h4>
      <div className={classes.button__inner}>
        <h5>Мои заказы</h5>
      </div>
      <img src={phoneImg} alt="cabinet" />
    </Link>
  );
}
