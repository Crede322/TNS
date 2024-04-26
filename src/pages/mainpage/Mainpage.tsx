import classes from "./Mainpage.module.css";
import ReduxTester from "../../components/divided/ReduxTester";
import MainpageSwiper from "./mainPage components/MainpageSwiper";
import ActualOffers from "./mainPage components/actual offers/ActualOffers";
import BrandsSwiper from "./mainPage components/brands swiper/BrandsSwiper";
import Discounts from "./mainPage components/discounts/Discounts";
import Footer from "../../components/global/footer/Footer";

const Mainpage = () => {
  return (
    <div>
      <div className={classes.top_line} />
      <div className={classes.wrapper}>
        <MainpageSwiper />
        <ActualOffers />
        <BrandsSwiper />
        <Discounts />
      </div>
    </div>
  );
};

export default Mainpage;
