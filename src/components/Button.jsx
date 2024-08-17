import React from "react";

const Button = (props) => {
  const { title, rightIcon, leftIcon, isHighlighted, onClickFn } = props.config;

  const getStyle = () => {
    if (isHighlighted)
      return "text-indigo-700 font-medium text-2xl border-none";
  };

  return (
    <div
      className={
        "flex flex-row justify-center px-3 py-2 mr-3 rounded-full border-[1px] border-black/10 cursor-pointer  " +
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
