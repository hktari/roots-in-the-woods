import React, { useState } from "react";
import NavBar from "../navigation/navbar";
import headerImageDesktop from "../../data/images/roots-banner-desktop.png";
import headerImageMobile from "../../data/images/roots-banner-mobile.jpg";

import SideBar from "../navigation/sidebar";
import { useEffect } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { useHeaderContext } from "../../context/header-context";

type HeaderProps = {
  setDisableScroll: (disabled: boolean) => void;
};

const Header = ({ setDisableScroll }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const data: Queries.BannerImagesQuery = useStaticQuery(graphql`
    query BannerImages {
      bannerDesktop: file(relativePath: { eq: "roots-banner-desktop.png" }) {
        childImageSharp {
          gatsbyImageData
        }
        name
      }
      bannerMobile: file(relativePath: { eq: "roots-banner-mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
        name
      }
    }
  `);

  const { setBanner } = useHeaderContext();

  const bannerDesktop = data?.bannerDesktop?.childImageSharp?.gatsbyImageData;
  const bannerMobile = data?.bannerMobile?.childImageSharp?.gatsbyImageData;
  if (!bannerDesktop || !bannerMobile) {
    throw new Error("Failed to find banner image");
  }

  setBanner(bannerDesktop, bannerMobile);

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
