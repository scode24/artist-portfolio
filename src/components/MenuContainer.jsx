import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFilterOpenCloseStore,
  useMenuOpenCloseStore,
} from "../stores/MenuStore";
import MenuOption from "./MenuOption";

const MenuContainer = (props) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const { changeMenuState } = useMenuOpenCloseStore();
  const { changeFilterState } = useFilterOpenCloseStore();
  const menuDataList = props.data;
  const { orientation, type } = props.config;

  const navigator = useNavigate();

  const handleOnSelected = (index) => {
    setSelectedIndex(index);
    navigator(menuDataList[index].redirectUrl);

    if (type === "dropdown") {
      changeMenuState(false);
      changeFilterState(false);
    }
  };

  const getOrientation = () => {
    return orientation == "row" ? "flex-row" : "flex-col";
  };

  return (
    <div className={"flex " + getOrientation()}>
      {menuDataList.map((option, index) => (
        <MenuOption
          key={index}
          data={option}
          config={{
            isSelected: selectedIndex == index ? true : false,
            onClickFn: () => handleOnSelected(index),
          }}
        />
      ))}
    </div>
  );
};

export default MenuContainer;
