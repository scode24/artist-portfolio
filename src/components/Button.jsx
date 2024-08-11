import React from "react";

const Button = (props) => {
  const { title, rightIcon, leftIcon, onClickFn } = props.config;
  return (
    <div
      className="flex flex-row text-2xl text-indigo-500 cursor-pointer hover:text-green-700"
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
