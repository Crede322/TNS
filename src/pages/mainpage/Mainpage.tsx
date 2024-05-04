import Header from "../../components/global/header/Header";
import classes from "./MainPage.module.css";
import MainpageSwiper from "./mainPage components/MainpageSwiper";
import ActualOffers from "./mainPage components/actual offers/ActualOffers";
import BrandsSwiper from "./mainPage components/brands swiper/BrandsSwiper";
import Discounts from "./mainPage components/discounts/Discounts";

const Mainpage = () => {
  return (
    <div>
      <Header />
      <div className={classes.wrapper}>
        <MainpageSwiper />
        <Discounts />
        <BrandsSwiper />
        <ActualOffers />
      </div>
    </div>
  );
};

export default Mainpage;
