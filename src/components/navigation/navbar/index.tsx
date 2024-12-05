import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import logo from "../../../images/logo.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import NavigationLink from "../navigationLink";
import NavigationItemDropdown from "../navigationItemDropdown";
import { NavigationItem } from "../common";

type NavBarProps = {
  openMenuClicked: () => void;
};

const NavBar = ({ openMenuClicked }: NavBarProps) => {

  const { contentfulNavigation: navigationItems } = useStaticQuery<Queries.NavigationItemsQuery>(graphql`
  query NavigationItems {
    contentfulNavigation {
      items {
        title
        url
        navigationItems {
          title
          url
        }
      }
  }
  }`);

  const scrollAmountThresholdPx = 75;
  const navbarHeightPx = 96;

  const [stickToTop, setStickToTop] = useState(false);
  const lastScrollY = useRef(0);

  // this is a positive number
  const scrollAmountTopPx = useRef(0);

  const onWindowScrollHandler = () => {
    const scrollDiff = window.scrollY - lastScrollY.current;

    if (scrollDiff > 0) {
      scrollAmountTopPx.current = 0; // reset if the user has scrolled down
    } else {
      scrollAmountTopPx.current += scrollDiff * -1; // the number is negative or zero, multiply by -1
    }

    // stick to top when navbar is scrolled out of sight
    // and when the user has scrolled up for at least scrollAmountThresholdPx
    setStickToTop(
      window.scrollY > navbarHeightPx &&
      scrollAmountTopPx.current > scrollAmountThresholdPx
    );

    lastScrollY.current = window.scrollY;
  };

  const renderNavigationItems = () => {
    return (
      <>
        {navigationItems && navigationItems.items && navigationItems.items.map((navItem) => {
          if (navItem && navItem.navigationItems) {
            return (
              <NavigationItemDropdown
                key={navItem.title}
                className="c-navbar__menu-list-item"
                title={navItem.title!}
                navigationItems={navItem.navigationItems as NavigationItem[]}
              />
            );
          } else {
            return (
              <li className="c-navbar__menu-list-item" key={navItem?.title}>
                <NavigationLink navigationItem={navItem as NavigationItem} />
              </li>
            );
          }
        })}
      </>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", onWindowScrollHandler);
    };
  }, [openMenuClicked]);

  return (
    <div className={`c-navbar ${stickToTop ? "c-navbar--sticky" : ""}`}>
      {/* <h1 className='c-navbar__title'>
        Roots in the Woods
      </h1> */}
      <Link to="/" className="c-logo c-navbar__logo">
        <img
          width="64px"
          height="64px"
          src={logo}
          alt="roots in the woods logo"
        />
      </Link>
      <button
        className="c-navbar__menu-toggle"
        onClick={() => openMenuClicked()}
      >
        <i className="bi bi-list"></i>
      </button>
      <nav className="c-navbar__menu">
        <ul className="c-navbar__menu-list">{renderNavigationItems()}</ul>
      </nav>
    </div>
  );
};

export default NavBar;
