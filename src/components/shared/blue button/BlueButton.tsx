import { useState } from "react";

interface BlueButtonProps {
  width: string;
  height: string;
  text: string;
  margin?: string;
  fontWeight?: number;
  fontColor?: string;
  borderRadius?: number;
  border?: string;
  background?: string;
  onClick?: () => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  width,
  height,
  text,
  margin,
  onClick,
  fontWeight,
  fontColor,
  borderRadius,
  border,
  background,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    width: width,
    height: height,
    background: background ? background : isHovered ? "#2796ff" : "#0080f5",
    borderRadius: borderRadius ? borderRadius : "12px",
    border: border ? border : "none",
    color: fontColor ? fontColor : "#fff",
    margin: margin,
    transition: "background-color 0.3s",
    fontWeight: fontWeight ? fontWeight : 700,
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BlueButton;
