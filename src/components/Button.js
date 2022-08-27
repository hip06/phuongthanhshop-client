import React, { memo } from "react";

export const Button = ({
  text,
  bgColor,
  textColor,
  onClick,
  width,
  height,
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor,color: textColor }}
      className={`outline-none text-[${textColor}] rounded-md opacity-80 hover:opacity-100 w-2/5 py-${height}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonCtWidth = ({ content, color, width, height, onAction }) => {
  return (
    <button
      style={{ backgroundColor: color,color:'white'}}
      className={`text-base text-white 
        px-${width} py-${height} rounded-lg 
        hover:-translate-y-0.5 transition-all 
        ease-in-out active:translate-y-0.5 
        mr-[20px] bg-[${color}]`}
      onClick={() => onAction()}
    >
      {content}
    </button>
  );
};

export default memo(Button);
