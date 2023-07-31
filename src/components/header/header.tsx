import React, { useState } from "react";
import NavBar from "../navbar/navbar";
import headerImageDesktop from "../../data/images/roots-banner-desktop.jpg";
import headerImageMobile from "../../data/images/roots-banner-mobile.jpg";
//
import SideBar from "../sidebar";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

type HeaderProps = {
  setDisableScroll: (disabled: boolean) => void;
};

const Header = ({ setDisableScroll }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setDisableScroll(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <>
      <header className="c-header">
        <picture>
          <source
            height={421}
            media="(max-width: 576px)"
            srcSet={headerImageMobile}
          />
          <img
            height={684}
            className="c-header__img"
            src={headerImageDesktop}
            alt="Roots In The Woods Banner"
          />
        </picture>
      </header>
      <SideBar
        isOpen={sidebarOpen}
        closeMenuClicked={() => setSidebarOpen(false)}
      />
      <NavBar openMenuClicked={() => setSidebarOpen(true)} />
    </>
  );
};

export default Header;
