import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import classes from "./ActualOffer.module.css";

interface OfferExemplarProps {
  link: string;
  heading: string;
  img: string;
}

export default function OfferExemplar({
  children,
  link,
  heading,
  img,
}: PropsWithChildren<OfferExemplarProps>) {
  return (
    <div className={classes.offer_wrapper}>
      <Link to={link} className={classes.actual_offer_title}>
        {heading}
      </Link>
      <div className={classes.content}>
        <Link to={link} className={classes.offer_button}>
          <img src={img} alt="actual offer" />
        </Link>
        <div className={classes.offer_categories}>{children}</div>
      </div>
    </div>
  );
}
