import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { createContext, useContext, useState } from "react";

interface IHeaderContext {
  bannerDesktopImage?: IGatsbyImageData;
  bannerMobileImage?: IGatsbyImageData;
  setBanner: (
    bannerDesktop: IGatsbyImageData,
    bannerMobile: IGatsbyImageData
  ) => void;
}

const headerContext = createContext<IHeaderContext>({
  setBanner: (bannerDesktop, bannerMobile) => {
    return;
  },
});

const HeaderContextProviderComponent = ({ children }) => {
  const data: Queries.BannerImagesQuery = useStaticQuery(graphql`
    query BannerImages {
      bannerDesktop: file(relativePath: { eq: "roots-banner-desktop.png" }) {
        childImageSharp {
          gatsbyImageData(height: 684)
        }
        name
      }
      bannerMobile: file(relativePath: { eq: "roots-banner-mobile.jpg" }) {
        childImageSharp {
          gatsbyImageData(height: 421)
        }
        name
      }
    }
  `);

  const bannerDesktop = data?.bannerDesktop?.childImageSharp?.gatsbyImageData;
  const bannerMobile = data?.bannerMobile?.childImageSharp?.gatsbyImageData;
  if (!bannerDesktop || !bannerMobile) {
    throw new Error("Failed to find banner image");
  }

  const [bannerDesktopImage, setBannerDesktopImage] =
    useState<IGatsbyImageData>(bannerDesktop);
  const [bannerMobileImage, setBannerMobileImage] =
    useState<IGatsbyImageData>(bannerMobile);

  const setBanner = (
    bannerDesktop: IGatsbyImageData,
    bannerMobile: IGatsbyImageData
  ) => {
    setBannerDesktopImage(bannerDesktop);
    setBannerMobileImage(bannerMobile);
  };

  const value = {
    setBanner,
    bannerDesktopImage,
    bannerMobileImage,
  };
  return (
    <headerContext.Provider value={value}>{children}</headerContext.Provider>
  );
};

export default HeaderContextProviderComponent;

export const useHeaderContext = () => useContext(headerContext);
