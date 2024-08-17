import { X } from "lucide-react";
import React from "react";
import {
  useFilterOpenCloseStore,
  useMenuOpenCloseStore,
} from "../stores/MenuStore";
import MenuContainer from "./MenuContainer";

const DropdownMenu = (props) => {
  const { changeMenuState } = useMenuOpenCloseStore();
  const { changeFilterState } = useFilterOpenCloseStore();

  return (
    <div className="flex flex-row justify-end absolute top-10 right-0 z-10 bg-transparent">
      <div className=" flex flex-col rounded-md shadow-md m-3 p-3 bg-white h-fit">
        <div
          className="flex flex-row justify-end cursor-pointer"
          onClick={() => {
            changeMenuState(false);
            changeFilterState(false);
          }}
        >
          <X strokeWidth={2} />
        </div>
        <MenuContainer
          data={props.data}
          config={{ orientation: "col", type: "dropdown" }}
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
