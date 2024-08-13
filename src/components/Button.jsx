import React from "react";

const Button = (props) => {
  const { title, rightIcon, leftIcon, isHighlighted, onClickFn } = props.config;

  const getStyle = () => {
    if (isHighlighted) return "text-2xl ";
  };

  return (
    <div
      className={
        "flex flex-row p-2 mr-3 rounded-full ring-1 ring-black/10 cursor-pointer hover:text-indigo-700 " +
        getStyle()
      }
      onClick={() => onClickFn()}
    >
      {leftIcon && (
        <div className="flex flex-col justify-center items-center mr-3">
          {leftIcon}
        </div>
      )}
      <div className="flex flex-col justify-center items-center mr-3">
        <span>{title}</span>
      </div>
      {rightIcon && (
        <div className="flex flex-col justify-center items-center">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Button;
