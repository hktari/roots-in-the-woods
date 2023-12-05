import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Dropdown from "./dropdown";
import links from "../../data/links.json";

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
        <ul className="c-navbar__menu-list">
          <li className="c-navbar__menu-list-item">
            <Link activeClassName="c-link--active" className="c-link" to="/">
              Home
            </Link>
          </li>
          <li className="c-navbar__menu-list-item">
            <a
              className="c-link"
              href={links.tickets}
            >
              Tickets
            </a>
          </li>
          {/* <li className="c-navbar__menu-list-item">
            <Link
              activeClassName="c-link--active"
              className="c-link"
              to="/events"
            >
              Events
            </Link>
          </li>
          <li className="c-navbar__menu-list-item">
            <Link
              activeClassName="c-link--active"
              className="c-link"
              to="/news"
            >
              News
            </Link>
          </li> */}
          <li className="c-navbar__menu-list-item">
            <Link
              activeClassName="c-link--active"
              className="c-link"
              to="/mission"
            >
              Mission
            </Link>
          </li>
          <li className="c-navbar__menu-list-item c-navbar__menu-list-item--drop-down">
            <Dropdown>
              <Link
                activeClassName="c-link--active"
                className="c-link"
                to="/lineup/2023"
              >
                2023
              </Link>
              <Link
                activeClassName="c-link--active"
                className="c-link"
                to="/lineup/2024"
              >
                2024
              </Link>
            </Dropdown>
          </li>
          <li className="c-navbar__menu-list-item">
            <Link activeClassName="c-link--active" className="c-link" to="/map">
              Map
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
