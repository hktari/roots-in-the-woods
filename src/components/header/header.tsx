import React, { useState } from "react";
import NavBar from "../navigation/navbar";
import SideBar from "../navigation/sidebar";
import { useEffect } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useHeaderContext } from "../../context/header-context";

type HeaderProps = {
  setDisableScroll: (disabled: boolean) => void;
};

const Header = ({ setDisableScroll }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { bannerDesktopImage, bannerMobileImage } = useHeaderContext();

  useEffect(() => {
    setDisableScroll(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <>
      <header className="c-header">
        <GatsbyImage
          image={bannerMobileImage!}
          alt={"TODO"}
          className="c-header__img d-md-none"
        />
        <div className="d-none d-md-block">
          <GatsbyImage
            image={bannerDesktopImage!}
            alt="TODO"
            className="c-header__img "
          />
        </div>
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
