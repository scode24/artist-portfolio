import React, { useEffect, useState } from "react";

const MenuOption = (props) => {
  const { icon, title } = props.data;
  const { isSelected, onClickFn } = props.config;
  const [hoverStyle, setHoverStyle] = useState();

  const highlightOnHover = (state) => {
    if (isSelected === true) {
      return;
    }
    if (state === true) {
      setHoverStyle("bg-indigo-500");
    } else {
      setHoverStyle("bg-none");
    }
  };

  useEffect(() => {
    if (isSelected) {
      setHoverStyle("bg-green-700");
    } else {
      setHoverStyle("bg-none");
    }
  }, [isSelected]);

  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => onClickFn()}
      onMouseEnter={() => highlightOnHover(true)}
      onMouseLeave={() => highlightOnHover(false)}
    >
      <div className="flex flex-row p-3 md:p-5">
        <div className="flex flex-col justify-center items-center mr-3">
          {icon}
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>{title}</span>
        </div>
      </div>
      <div className={"h-[3px] " + hoverStyle}></div>
    </div>
  );
};

export default MenuOption;
