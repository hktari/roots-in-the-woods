import React from "react";
import { Link } from "gatsby";
import { useRef } from "react";
import { useEffect } from "react";
import SocialList from "../../social-list";
import navigationItems from "../common";
import NavigationLink from "../navigationLink";
import NavigationItemDropdown from "../navigationItemDropdown";

type SideBarProps = {
  isOpen: boolean;
  closeMenuClicked: VoidFunction;
};

const SideBar = ({ isOpen, closeMenuClicked }: SideBarProps) => {
  const menuListRef = useRef<HTMLElement>();

  useEffect(() => {
    if (!menuListRef.current) {
      return;
    }

    const links = menuListRef.current.querySelectorAll(
      ".c-sidebar__menu-list-item > a"
    )!;

    const linkClickEventHandler = () => closeMenuClicked();

    links.forEach((link) => {
      console.log("link", link.getAttribute("href"));

      // close menu when link is clicked
      link.addEventListener("click", linkClickEventHandler);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", linkClickEventHandler);
      });
    };
  }, [menuListRef]);

  const renderNavigationItems = () => {
    return (
      <>
        {navigationItems.map((navItem) => {
          if (navItem.navigationItems) {
            return (
              <NavigationItemDropdown
                title={navItem.title}
                navigationItems={navItem.navigationItems}
              />
            );
          }
          return (
            <li className="c-sidebar__menu-list-item">
              <NavigationLink navigationItem={navItem} />
            </li>
          );
        })}
      </>
    );
  };

  return (
    <div className={`c-sidebar ${isOpen ? "c-sidebar--show" : ""}`}>
      <header className="c-sidebar__header">
        <button
          className="c-sidebar__btn-close"
          onClick={() => closeMenuClicked()}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </header>

      <nav className="c-sidebar__menu">
        <ul className="c-sidebar__menu-list" ref={menuListRef}>
          {renderNavigationItems()}
        </ul>
      </nav>

      <div className="c-sidebar__social">
        <SocialList classModifiers={"c-social-list--black"} />
      </div>
    </div>
  );
};

export default SideBar;
