import React from "react";
import { NavigationItem } from "./common";
import NavigationLink from "./navigationLink";

// TODO:
type Props = {
  title: string;
  navigationItems: NavigationItem[];
  className?: string;
};

const NavigationItemDropdown = ({
  title,
  navigationItems,
  className,
}: Props) => {
  return (
    // TODO: fix CSS, use bootstrap navbar
    <li className={`nav-item dropdown ${className || ""}`}>
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
            <li className="c-navbar__menu-list-item" key={subNavItem.title}>
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
