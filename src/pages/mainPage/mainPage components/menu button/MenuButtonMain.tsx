import classes from "./MenuButtonMain.module.css";
import { useNavigate } from "react-router-dom";
import phoneImg from "../../../../img/mainMenu/phoneImg.jpg";

export default function MenuButtonMain() {
  const navigate = useNavigate();

  const handleClickOrders = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("/cart");
  };

  const handleClickAuth = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate("/auth");
  };

  return (
    <div onClick={handleClickAuth} className={classes.button}>
      <h3>Личный кабинет</h3>
      <h4>Получайте бонусы, отслеживайте заказы и делитесь мнением</h4>
      <button onClick={handleClickOrders} className={classes.button__inner}>
        <h5>Мои заказы</h5>
      </button>
      <img src={phoneImg} alt="cabinet" />
    </div>
  );
}
