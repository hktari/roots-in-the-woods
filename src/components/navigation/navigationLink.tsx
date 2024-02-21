import React from "react";
import { NavigationItem } from "./common";
import { Link } from "gatsby";

type Props = {
  navigationItem: NavigationItem;
};

const NavigationLink = ({ navigationItem: navItem }: Props) => {
  const isRelativeUrl = () => navItem.url.startsWith("http");

  return isRelativeUrl() ? (
    <Link activeClassName="c-link--active" className="c-link" to={navItem.url}>
      {navItem.title}
    </Link>
  ) : (
    <a className="c-link" href={navItem.url} target="_blank">
      {navItem.title}
    </a>
  );
};

export default NavigationLink;
