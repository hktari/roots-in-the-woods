import React from 'react';
import NavigationLink from "../navigationLink";
import NavigationItemDropdown from "../navigationItemDropdown";
import { NavigationItem } from "../common";

interface NavigationItemsProps {
  items: any[];
  className?: string;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({ items, className }) => {
  return (
    <>
      {items?.map((navItem) => {
        if (navItem && navItem.navigationItems) {
          return (
            <NavigationItemDropdown
              key={navItem.title}
              className={className}
              title={navItem.title!}
              navigationItems={navItem.navigationItems as NavigationItem[]}
            />
          );
        } else {
          return (
            <li className={className} key={navItem?.title}>
              <NavigationLink navigationItem={navItem as NavigationItem} />
            </li>
          );
        }
      })}
    </>
  );
};
