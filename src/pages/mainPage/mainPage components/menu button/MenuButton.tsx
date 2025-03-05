import { useState } from "react";
import classes from "./MenuButton.module.css";
import { useDispatch } from "react-redux";
import { showAuthModal } from "../../../../features/authSlice";

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
}

const MenuButton: React.FC<MenuButtonProps> = ({
  width,
  height,
  title,
  text,
  background,
  innerButton,
  marginRight,
  imageSrc,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const dispath = useDispatch();
  const buttonClickCabinet = () => {
    dispath(showAuthModal());
  };

  const buttonStyle = {
    width: innerButton ? "19vw" : width,
    height: height,
    background:
      !innerButton && isHovered && background
        ? `${background.slice(0, -1)}, 0.4)`
        : background,
    borderRadius: "16px",
    marginRight: marginRight,
    transition: "background-color 0.3s",
    minWidth: innerButton ? "19vw" : "",
  };

  return (
    <div
      style={buttonStyle}
      className={classes.menu__button_cabinet}
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
    >
      <a href={link} className={classes.menu__button_link}>
        <h3>{title}</h3>
        <h4>{text}</h4>
        {innerButton ? (
          <button
            className={classes.inner__button}
            onClick={buttonClickCabinet}
          >
            <h2>Мои заказы</h2>
          </button>
        ) : null}
        <img
          src={imageSrc}
          alt="menu illustration"
          className={
            innerButton
              ? classes.cabinet__button_img
              : classes.default__menu__button
          }
        />
      </a>
    </div>
  );
};

export default MenuButton;
