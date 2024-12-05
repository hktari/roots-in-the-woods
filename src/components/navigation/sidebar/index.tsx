import React from "react";
import { Link } from "gatsby";
import { useRef } from "react";
import { useEffect } from "react";
import SocialList from "../../social-list";
import { NavigationItem, useNavigation } from "../common";
import { NavigationItems } from "../components/NavigationItems";

type SideBarProps = {
  isOpen: boolean;
  closeMenuClicked: VoidFunction;
};

const SideBar = ({ isOpen, closeMenuClicked }: SideBarProps) => {
  const menuListRef = useRef<HTMLElement>();
  const navigationItems = useNavigation();

  useEffect(() => {
    if (!menuListRef.current) {
      return;
    }

    const links = menuListRef.current.querySelectorAll(
      ".c-sidebar__menu-list-item a:not([data-bs-toggle='dropdown'])"
    )!;

    const linkClickEventHandler = () => closeMenuClicked();

    links.forEach((link) => {
      // close menu when link is clicked
      link.addEventListener("click", linkClickEventHandler);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", linkClickEventHandler);
      });
    };
  }, [menuListRef]);

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
          <NavigationItems
            items={navigationItems || []}
            className="c-sidebar__menu-list-item"
          />
        </ul>
      </nav>
      <div className="c-sidebar__social">
        <SocialList classModifiers={"c-social-list--black"} />
      </div>
    </div>
  );
};

export default SideBar;
