import "swiper/css";
import "swiper/css/free-mode";
import "../../../../features/swiper/swiper.css";
import classes from "./Discounts.module.css";
import DiscountOffer from "./discounts components/DiscountOffer";

const Discounts = () => {
  return (
    <div className={classes.discounts__wrapper}>
      <DiscountOffer
        title="Ещё 3 дня скидка"
        description="Процессор AMD Ryzen 7 2700X"
        discountPrice={20000}
        oldPrice={22500}
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen%207%202700x?t=2024-08-18T06%3A43%3A02.033Z"
        link="10"
      />
      <DiscountOffer
        title="Ещё 2 дня скидка"
        description="Процессор AMD FX-8350"
        discountPrice={7000}
        oldPrice={10000}
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/fx%208"
        link="19"
      />
      <DiscountOffer
        title="Ещё 3 дня скидка"
        description="Процессор AMD Ryzen 5 3600"
        discountPrice={15000}
        oldPrice={17000}
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen%205%203600?t=2024-08-18T06%3A43%3A37.943Z"
        link="7"
      />
      <DiscountOffer
        title="Ещё 1 день скидка"
        description="Процессор AMD Ryzen 7 1700X"
        discountPrice={14000}
        oldPrice={16000}
        img="https://bngqeagmdhtibgumjdyo.supabase.co/storage/v1/object/public/cpu%20images/ryzen%207%201700x?t=2024-08-18T06%3A44%3A37.031Z"
        link="12"
      />
    </div>
  );
};

export default Discounts;
