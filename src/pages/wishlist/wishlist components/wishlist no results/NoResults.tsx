import React from "react";
import classes from "./NoResults.module.css";
import BlueButton from "../../../../components/shared/blue button/BlueButton";
import noResultsImg from "../../../../img/searchPage/no results illust.jpg";
import { useNavigate } from "react-router-dom";

interface NoResultsProps {
  text: string;
}

const NoResults: React.FC<NoResultsProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/`);
  };
  return (
    <div className={classes.wishlist_noResults_container}>
      <div className={classes.wishlist_noResults_info}>
        <img src={noResultsImg} alt="noResults" />
        <h3>{text}</h3>
        <div className={classes.noResults_button}>
          <BlueButton
            width="170px"
            height="44px"
            text="Перейти в каталог"
            fontWeight={500}
            borderRadius={8}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default NoResults;
