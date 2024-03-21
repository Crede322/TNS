import React, { useState } from "react";

interface BlueButtonProps {
  width: number;
  height: number;
  text: string;
  margin?: string;
  onClick?: () => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  width,
  height,
  text,
  margin,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    width: width,
    height: height,
    background: isHovered ? "#4187a5" : "#2c7da0",
    borderRadius: "12px",
    color: "#fff",
    fontWeight: "700",
    margin: margin,
    transition: "background-color 0.3s",
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
