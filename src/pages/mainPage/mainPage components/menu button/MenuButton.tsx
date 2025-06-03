import { useState } from "react";
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
  link?: string;
  buttonClass?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  text,
  background,
  imageSrc,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const buttonStyle = {
    background:
      isHovered && background ? `${background.slice(0, -1)}, 0.4)` : background,
    borderRadius: "16px",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={buttonStyle}
      className={`${classes.menu__button}`}
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
    >
      <a href={link} className={classes.menu__button_link}>
        <h3>{title}</h3>
        <h4>{text}</h4>
        <img
          src={imageSrc}
          alt="menu illustration"
          className={classes.default__menu__button}
        />
      </a>
    </div>
  );
};

export default MenuButton;
