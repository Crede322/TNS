import React from "react";
import classes from "./MenuButton.module.css";
interface MenuButtonProps {
  width: number;
  height: number;
  title: string;
  text: string;
  background: string;
  onClick?: () => void;
  innerButton?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  width,
  height,
  title,
  text,
  background,
  onClick,
  innerButton,
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    background: background,
    borderRadius: "16px",
  };

  return (
    <li style={buttonStyle} className={classes.menu__button_cabinet}>
      <h3>{title}</h3>
      <h4>{text}</h4>
      {innerButton ? (
        <button className={classes.inner__button}>
          <h2>Мои заказы</h2>
        </button>
      ) : null}
    </li>
  );
};

export default MenuButton;
