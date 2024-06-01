import React from "react";
import favImg from "../../img/favorite.svg";

interface FavButtonProps {
  favStyle: string;
  id: number;
}

const FavButton: React.FC<FavButtonProps> = ({ favStyle, id }) => {
  let style;
  let wrapper;

  const handleFavButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (favStyle === "mainFav") {
    wrapper = {
      height: "44px",
      width: "44px",
      border: "1px solid #d9d9d9",
      borderRadius: "8px",
    };
    style = {
      width: "20px",
      height: "20px",
    };
  } else if (favStyle === "headerFav") {
    style = {
      width: "40px",
      height: "40px",
    };
  }

  return (
    <button style={wrapper} onClick={handleFavButton}>
      <img src={favImg} alt="fav icon" style={style} />
    </button>
  );
};

export default FavButton;
