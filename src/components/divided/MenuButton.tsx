import React, { useState } from "react";
import classes from "./MenuButton.module.css";

interface MenuButtonProps {
  width: number;
  height: number;
  title: string;
  text: string;
  background?: string;
  onClick?: () => void;
  innerButton?: boolean;
  marginRight?: string;
  opacity?: string;
  imageSrc?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  width,
  height,
  title,
  text,
  background,
  innerButton,
  marginRight,
  opacity,
  imageSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
    console.log("hover!");
  };

  const buttonStyle = {
    width: width,
    height: height,
    background:
      !innerButton && isHovered && background
        ? `${background.slice(0, -1)}, 0.4)`
        : background,
    borderRadius: "16px",
    marginRight: marginRight,
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={buttonStyle}
      className={classes.menu__button_cabinet}
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
    >
      <h3 style={{ opacity: "1" }}>{title}</h3>
      <h4 style={{ opacity: "1" }}>{text}</h4>
      {innerButton ? (
        <button className={classes.inner__button}>
          <h2>Мои заказы</h2>
        </button>
      ) : null}
      <img src={imageSrc} alt="menu illustration" />
    </div>
  );
};

export default MenuButton;
