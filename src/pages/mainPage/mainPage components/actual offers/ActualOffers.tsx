import classes from "./ActualOffer.module.css";
import { Link } from "react-router-dom";
import OfferExemplar from "./OfferExemplar";

const ActualOffer: React.FC = () => {
  return (
    <div className={classes.actual_offers_row}>
      <OfferExemplar
        link="/search/?q=ryzen%205"
        heading="Ryzen 5"
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen5"
      >
        <Link to="/product/6">
          <h5>AMD Ryzen 5 1600</h5>
        </Link>
        <Link to="/product/9">
          <h5>AMD Ryzen 5 3600X</h5>
        </Link>
        <Link to="/product/15">
          <h5>AMD Ryzen 5 5600X</h5>
        </Link>
        <Link to="/product/2">
          <h5>AMD Ryzen 5 3600</h5>
        </Link>
      </OfferExemplar>
      <OfferExemplar
        link="/search/?q=ryzen%207"
        heading="Ryzen 7"
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen7"
      >
        <Link to="/product/7">
          <h5>AMD Ryzen 7 1700X</h5>
        </Link>
        <Link to="/product/5">
          <h5>AMD Ryzen 7 2700X</h5>
        </Link>
        <Link to="/product/1">
          <h5>AMD Ryzen 7 3700x</h5>
        </Link>
        <Link to="/product/11">
          <h5>AMD Ryzen 7 7800X3D</h5>
        </Link>
      </OfferExemplar>

      <OfferExemplar
        link="/search/?q=core%20i5"
        heading="Core i5"
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/i5%2012600k?t=2024-08-18T06%3A20%3A22.262Z"
      >
        <Link to="/product/110">
          <h5>Intel Core i5-12400</h5>
        </Link>
        <Link to="/product/104">
          <h5>Intel Core i5-13400F</h5>
        </Link>
        <Link to="/product/107">
          <h5>Intel Core i5-13500</h5>
        </Link>
        <Link to="/product/111">
          <h5>Intel Core i5-12600K</h5>
        </Link>
      </OfferExemplar>

      <OfferExemplar
        link="/search/?q=core%20i9"
        heading="Core i9"
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/i9%2011900k"
      >
        <Link to="/product/101">
          <h5>Intel Core i9-13900K</h5>
        </Link>
        <Link to="/product/106">
          <h5>Intel Core i9-12900K</h5>
        </Link>
        <Link to="/product/109">
          <h5>Intel Core i9-11900K</h5>
        </Link>
        <Link to="/product/112">
          <h5>Intel Core i9-10850K</h5>
        </Link>
      </OfferExemplar>
    </div>
  );
};

export default ActualOffer;
