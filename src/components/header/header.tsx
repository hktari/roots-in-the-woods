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
        <img
          className="c-header__img"
          srcSet={`${headerImageMobile} 1219w, ${headerImageDesktop} 1920w`}
          sizes="(max-width: 768px) 100vw,
          1920px"
          src={headerImageDesktop}
          alt="Roots In The Woods Banner"
        />
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
