import React from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Dropdown from "./dropdown";
import navigationItems from "../common";

type NavBarProps = {
  openMenuClicked: () => void;
};

const NavBar = ({ openMenuClicked }: NavBarProps) => {
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
        {navigationItems.map((navItem) => {
          return (
            <li className="c-navbar__menu-list-item">
              <Link
                activeClassName="c-link--active"
                className="c-link"
                to={navItem.relativeUrl}
              >
                {navItem.title}
              </Link>
            </li>
          );
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
