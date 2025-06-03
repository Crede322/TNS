import classes from "./PromotionPageTemplate.module.css";
import SwiperTemplate from "../sliderTemplates/SwiperTemplate";

interface Props {
  heading: string;
  textH2: string;
  textH3: string;
  productIDs: number[];
}

export default function PromotionPageTemplate({
  heading,
  textH2,
  textH3,
  productIDs,
}: Props) {
  return (
    <main className={classes.background}>
      <div className={classes.page}>
        <h1 className={classes.heading}>{heading}</h1>
        <section className={classes.section}>
          <div className={classes.textbox}>
            <h2 className={classes.article1}>{textH2}</h2>
          </div>
          <div className={classes.textbox}>
            <h3 className={classes.article2}>{textH3}</h3>
          </div>
          <SwiperTemplate productList={productIDs} />
        </section>
      </div>
    </main>
  );
}
