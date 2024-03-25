import React, { useContext, useState } from "react";
import NavBar from "../navigation/navbar";
import SideBar from "../navigation/sidebar";
import { useEffect } from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useHeaderContext } from "../../context/header-context";
import { useStaticQuery, graphql } from "gatsby";
import { LayoutContext } from "../layout/layout";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { overrideBannerDesktopImage, overrideBannerMobileImage } =
    useHeaderContext();

  const data: Queries.BannerImagesQuery = useStaticQuery(graphql`
    query BannerImages {
      bannerDesktop: file(relativePath: { eq: "roots-banner-desktop.png" }) {
        childImageSharp {
          gatsbyImageData(height: 915, layout: FULL_WIDTH)
        }
        name
      }
      bannerMobile: file(relativePath: { eq: "roots-banner-mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 915, layout: FULL_WIDTH)
        }
        name
      }
    }
  `);

  const defaultBannerDesktop =
    data?.bannerDesktop?.childImageSharp?.gatsbyImageData;
  const defaultBannerMobile =
    data?.bannerMobile?.childImageSharp?.gatsbyImageData;
  if (!defaultBannerDesktop || !defaultBannerMobile) {
    throw new Error("Failed to find banner image");
  }

  const { setDisableScroll } = useContext(LayoutContext);

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
