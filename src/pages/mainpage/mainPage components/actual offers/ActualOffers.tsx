import classes from "./ActualOffer.module.css";

const ActualOffer: React.FC = () => {
  return (
    <div className={classes.actual_offers_row}>
      <div className={classes.actual_offer_wrapper}>
        <a
          href="https://crede322.github.io/TNS/#/search/?q=ryzen%205"
          className={classes.actual_offer_title}
        >
          Ryzen 5
        </a>
        <div className={classes.content}>
          <a
            href="https://crede322.github.io/TNS/#/search/?q=ryzen%205"
            className={classes.offer_button}
          >
            <img
              src="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen5"
              alt="actual offer"
            />
          </a>
          <div className={classes.offer_categories}>
            <a href="https://crede322.github.io/TNS/#/product/6">
              <h5>AMD Ryzen 5 1600</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/9">
              <h5>AMD Ryzen 5 3600X</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/15">
              <h5>AMD Ryzen 5 5600X</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/2">
              <h5>AMD Ryzen 5 3600</h5>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a
          href="https://crede322.github.io/TNS/#/search/?q=ryzen%207"
          className={classes.actual_offer_title}
        >
          Ryzen 7
        </a>
        <div className={classes.content}>
          <a
            href="https://crede322.github.io/TNS/#/search/?q=ryzen%207"
            className={classes.offer_button}
          >
            <img
              src="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen7"
              alt="actual offer"
            />
          </a>
          <div className={classes.offer_categories}>
            <a href="https://crede322.github.io/TNS/#/product/7">
              <h5>AMD Ryzen 7 1700X</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/5">
              <h5>AMD Ryzen 7 2700X</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/1">
              <h5>AMD Ryzen 7 3700x</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/11">
              <h5>AMD Ryzen 7 7800X3D</h5>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a
          href="https://crede322.github.io/TNS/#/search/?q=core%20i5"
          className={classes.actual_offer_title}
        >
          Core i5
        </a>
        <div className={classes.content}>
          <a
            href="https://crede322.github.io/TNS/#/search/?q=core%20i5"
            className={classes.offer_button}
          >
            <img
              src="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/i5%2012600k?t=2024-08-18T06%3A20%3A22.262Z"
              alt="actual offer"
            />
          </a>
          <div className={classes.offer_categories}>
            <a href="https://crede322.github.io/TNS/#/product/110">
              <h5>Intel Core i5-12400</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/104">
              <h5>Intel Core i5-13400F</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/107">
              <h5>Intel Core i5-13500</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/111">
              <h5>Intel Core i5-12600K</h5>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.actual_offer_wrapper}>
        <a
          href="https://crede322.github.io/TNS/#/search/?q=core%20i9"
          className={classes.actual_offer_title}
        >
          Core i9
        </a>
        <div className={classes.content}>
          <a
            href="https://crede322.github.io/TNS/#/search/?q=core%20i9"
            className={classes.offer_button}
          >
            <img
              src="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/i9%2011900k"
              alt="actual offer"
            />
          </a>
          <div className={classes.offer_categories}>
            <a href="https://crede322.github.io/TNS/#/product/101">
              <h5>Intel Core i9-13900K</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/106">
              <h5>Intel Core i9-12900K</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/109">
              <h5>Intel Core i9-11900K</h5>
            </a>
            <a href="https://crede322.github.io/TNS/#/product/112">
              <h5>Intel Core i9-10850K</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualOffer;
