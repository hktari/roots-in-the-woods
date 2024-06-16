import React from "react";
import { NavigationItem } from "./common";
import NavigationLink from "./navigationLink";

// TODO: 
type Props = {
  title: string;
  navigationItems: NavigationItem[];
};

const NavigationItemDropdown = ({ title, navigationItems }: Props ) => {
  return (
    <li className="c-navbar__menu-list-item nav-item dropdown">
      <a
        className="c-link nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </a>
      <ul className="dropdown-menu dropdown-menu-dark">
        {navigationItems.map((subNavItem) => {
          return (
            <li className="c-navbar__menu-list-item">
              <NavigationLink
                navigationItem={subNavItem}
                additonalClasses="dropdown-item"
              />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default NavigationItemDropdown;
