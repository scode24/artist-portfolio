import React, { useEffect, useState } from "react";
import useDialogStore from "../stores/DialogStore";
import useUserAuthStore from "../stores/UserAuthStore";
import LoginForm from "./LoginForm";

const MenuOption = (props) => {
  const { icon, title } = props.data;
  const { isSelected, onClickFn } = props.config;
  const [hoverStyle, setHoverStyle] = useState();
  const { push } = useDialogStore();

  const { loggedInUser, setLoggedInUser } = useUserAuthStore();

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

  const onClickUserButtton = () => {
    if (loggedInUser) {
      push(
        <div className="flex flex-col">
          <span>Do you wnat to logout ?</span>
          <input
            className="rounded-md p-2 mr-3 mt-3 bg-indigo-700 text-white cursor-pointer w-full"
            type="button"
            value="Logout"
            onClick={() => setLoggedInUser(undefined)}
          />
        </div>
      );
    } else {
      push(<LoginForm />);
    }
  };

  useEffect(() => {
    if (isSelected) {
      setHoverStyle("bg-green-700");
    } else {
      setHoverStyle("bg-none");
    }
  }, [isSelected]);

  return title === "login-logout" ? (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => onClickUserButtton()}
      onMouseEnter={() => highlightOnHover(true)}
      onMouseLeave={() => highlightOnHover(false)}
    >
      <div className="flex flex-row p-3 md:p-5">
        <div className="flex flex-col justify-center items-center mr-3">
          {icon}
        </div>
        <div className="flex flex-col justify-center items-center">
          {loggedInUser ? loggedInUser.name : "Login / Register"}
        </div>
      </div>
      <div className={"h-[3px] " + hoverStyle}></div>
    </div>
  ) : (
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
