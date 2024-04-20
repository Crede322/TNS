import classes from "./Mainpage.module.css";
import ReduxTester from "../../components/divided/ReduxTester";
import MainpageSwiper from "../../components/divided/mainPage components/MainpageSwiper";

const Mainpage = () => {
  return (
    <div className={classes.wrapper}>
      <MainpageSwiper />
      <div className={classes.actual_offers_row}></div>
    </div>
  );
};

export default Mainpage;
