import { Brush, Contact, Home, Menu, Palette, UserPen } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMenuOpenCloseStore } from "../stores/MenuStore";
import DropdownMenu from "./DropdownMenu";
import MenuContainer from "./MenuContainer";

const Header = () => {
  const navigator = useNavigate();
  const { menuOpen, changeMenuState } = useMenuOpenCloseStore();

  const redirectToHome = () => {
    navigator("/");
    setMenuData(menuData.map((menu) => ({ ...menu, isSelected: false })));
  };

  return (
    <div className="flex flex-row justify-between p-5 border-b bg-white md:p-0">
      <div
        className="flex flex-row cursor-pointer md:pl-5"
        onClick={() => redirectToHome()}
      >
        <div className="flex flex-col justify-center mr-3">
          <Brush strokeWidth={2} />
        </div>
        <div className="flex flex-col justify-center">
          <span>Sayantani Dey</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className="flex flex-col justify-center mr-3 cursor-pointer md:hidden"
          onClick={() => changeMenuState(true)}
        >
          <Menu strokeWidth={2} />
        </div>
        <div>
          {menuOpen ? (
            <DropdownMenu
              data={[
                {
                  icon: <Home strokeWidth={2} />,
                  title: "Home",
                  redirectUrl: "/",
                },
                {
                  icon: <UserPen strokeWidth={2} />,
                  title: "About Me",
                  redirectUrl: "/aboutme",
                },
                {
                  icon: <Palette strokeWidth={2} />,
                  title: "Art Work",
                  redirectUrl: "/artwork/all",
                },
                {
                  icon: <Contact strokeWidth={2} />,
                  title: "Contact Me",
                  redirectUrl: "/contactme",
                },
              ]}
            />
          ) : null}
        </div>
      </div>

      <div className="hidden md:flex">
        <MenuContainer
          data={[
            {
              icon: <Home strokeWidth={2} />,
              title: "Home",
              redirectUrl: "/",
            },
            {
              icon: <UserPen strokeWidth={2} />,
              title: "About Me",
              redirectUrl: "/aboutme",
            },
            {
              icon: <Palette strokeWidth={2} />,
              title: "Art Work",
              redirectUrl: "/artwork/all",
            },
            {
              icon: <Contact strokeWidth={2} />,
              title: "Contact Me",
              redirectUrl: "/contactme",
            },
          ]}
          config={{ orientation: "row" }}
        />
      </div>
    </div>
  );
};

export default Header;
