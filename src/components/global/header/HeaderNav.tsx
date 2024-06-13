import cpu from "../../../img/nav/cpu.svg";
import ram from "../../../img/nav/ram.svg";
import hhd from "../../../img/nav/hhd.svg";
import power from "../../../img/nav/power.svg";
import compCase from "../../../img/nav/case.svg";
import cpuFan from "../../../img/nav/cpuFan.svg";
import videocard from "../../../img/nav/videocard.svg";
import motherboard from "../../../img/nav/motherboard.svg";
import classes from "./Header.module.css";

const HeaderNav = () => {
  return (
    <div>
      <div className={classes.nav__wrapper}>
        <div className={classes.nav}>
          <button>
            <img src={videocard} alt="img videocard" />
            <h3>Видеокарта</h3>
          </button>
          <button>
            <img src={cpu} alt="img cpu" />
            <h3>Процессор</h3>
          </button>
          <button>
            <img src={motherboard} alt="motherboard" />
            <h3>Мат. плата</h3>
          </button>
          <button className={classes.ram__btn}>
            <img src={ram} alt="img ram" className={classes.ram__img} />
            <h3>Оперативная память</h3>
          </button>
          <button>
            <img src={compCase} alt="img case" />
            <h3>Корпус</h3>
          </button>
          <button>
            <img src={cpuFan} alt="img fan" />
            <h3>Охлаждение</h3>
          </button>
          <button>
            <img src={hhd} alt="img hard disk" />
            <h3>Накопители</h3>
          </button>
          <button>
            <img src={power} alt="img power supply" />
            <h3>Блок питания</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
