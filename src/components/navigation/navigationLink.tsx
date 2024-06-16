import React from "react";
import { NavigationItem } from "./common";
import { Link } from "gatsby";

type Props = {
  navigationItem: NavigationItem;
};

const NavigationLink = ({ navigationItem: navItem }: Props) => {
  const isAbsoluteUrl = () => navItem.url.startsWith("http");

  return isAbsoluteUrl() ? (
    <a className="c-link" href={navItem.url} target="_blank">
      {navItem.title}
    </a>
  ) : (
    <Link activeClassName="c-link--active" className="c-link" to={navItem.url}>
      {navItem.title}
    </Link>
  );
};

export default NavigationLink;
