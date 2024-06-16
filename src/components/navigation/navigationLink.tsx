import React from "react";
import { NavigationItem } from "./common";
import { Link } from "gatsby";

type Props = {
  navigationItem: NavigationItem;
  additonalClasses?: string;
};

const NavigationLink = ({
  navigationItem: navItem,
  additonalClasses,
}: Props) => {
  const isAbsoluteUrl = () => navItem.url.startsWith("http");

  const className = `c-link ${additonalClasses || ""}`;

  return isAbsoluteUrl() ? (
    <a href={navItem.url} className={className} target="_blank">
      {navItem.title} 
    </a>
  ) : (
    <Link activeClassName="c-link--active" className={className} to={navItem.url}>
      {navItem.title}
    </Link>
  );
};

export default NavigationLink;
