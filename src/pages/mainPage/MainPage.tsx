import RecentViewed from "../../components/global/recentViewed/RecentViewed";
import classes from "./MainPage.module.css";
import MainpageSwiper from "./mainPage components/mainPage swiper/MainpageSwiper";
import ActualOffers from "./mainPage components/actual offers/ActualOffers";
import BrandsSwiper from "./mainPage components/brands swiper/BrandsSwiper";
import Discounts from "./mainPage components/discounts/Discounts";

const MainPage = () => {
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.wrapper}>
          <MainpageSwiper />
          <ActualOffers />
          <BrandsSwiper />
          <Discounts />
          <RecentViewed />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
