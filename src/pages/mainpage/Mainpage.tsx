import classes from "./Mainpage.module.css";
import ReduxTester from "../../components/divided/ReduxTester";
import MainpageSwiper from "../../components/divided/mainPage components/MainpageSwiper";
import ActualOffers from "../../components/divided/mainPage components/ActualOffers";

const Mainpage = () => {
  return (
    <div className={classes.wrapper}>
      <MainpageSwiper />
      <ActualOffers />
    </div>
  );
};

export default Mainpage;
