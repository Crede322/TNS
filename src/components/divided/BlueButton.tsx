import React, { useState } from "react";

interface BlueButtonProps {
  width: number;
  height: number;
  text: string;
  margin?: string;
  fontWeight?: number;
  fontColor?: string;
  borderRadius?: number;
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
  background,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    width: width,
    height: height,
    background: background ? background : isHovered ? "#4187a5" : "#2c7da0",
    borderRadius: borderRadius ? borderRadius : "12px",
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
