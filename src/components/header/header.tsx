import React, { useState } from "react";
import NavBar from "../navigation/navbar";
import SideBar from "../navigation/sidebar";
import { useEffect } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useHeaderContext } from "../../context/header-context";
import { useStaticQuery, graphql } from "gatsby";

type HeaderProps = {
  setDisableScroll: (disabled: boolean) => void;
};

const Header = ({ setDisableScroll }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { overrideBannerDesktopImage, overrideBannerMobileImage } =
    useHeaderContext();

  const data: Queries.BannerImagesQuery = useStaticQuery(graphql`
    query BannerImages {
      contentfulBanner {
        imageMobile {
          gatsbyImageData(height: 765, width: 765)
        }
        imageDesktop {
          gatsbyImageData(height: 915, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const defaultBannerDesktop =
    data?.contentfulBanner?.imageDesktop?.gatsbyImageData;
  const defaultBannerMobile =
    data?.contentfulBanner?.imageMobile?.gatsbyImageData;
    
  if (!defaultBannerDesktop || !defaultBannerMobile) {
    throw new Error("Failed to find banner image");
  }

  useEffect(() => {
    setDisableScroll(sidebarOpen);
  }, [sidebarOpen]);

  const altText = "Roots in the Woods Banner";
  return (
    <>
      <header className="c-header">
        <GatsbyImage
          image={overrideBannerMobileImage || defaultBannerMobile}
          alt={altText}
          className="c-header__img d-md-none"
        />
        <GatsbyImage
          image={overrideBannerDesktopImage || defaultBannerDesktop}
          alt={altText}
          className="c-header__img d-none d-md-block"
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
