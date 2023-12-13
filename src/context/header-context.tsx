import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { createContext, useContext, useState } from "react";

interface IHeaderContext {
  overrideBannerDesktopImage?: IGatsbyImageData;
  overrideBannerMobileImage?: IGatsbyImageData;
  setOverrideBannerDesktopImage: (bannerDesktop: IGatsbyImageData) => void;
  clearOverrideBanner: VoidFunction;
}

const headerContext = createContext<IHeaderContext>({
  setOverrideBannerDesktopImage: (bannerDesktop) => {
    console.log("BANNER", "DEFAULT!!");
    return;
  },
  clearOverrideBanner: () => {
    return;
  },
});

const HeaderContextProviderComponent = ({ children }) => {
  const [overrideBannerDesktopImage, setOverrideBannerDesktopImage] =
    useState<IGatsbyImageData>();
  const [overrideBannerMobileImage, setOverrideBannerMobileImage] =
    useState<IGatsbyImageData>();

  const setOverrideBanner = (
    bannerDesktop: IGatsbyImageData,
    bannerMobile: IGatsbyImageData
  ) => {
    console.log(
      "BANNER",
      "SET",
      JSON.stringify({ bannerDesktop, bannerMobile })
    );
    setOverrideBannerDesktopImage(bannerDesktop);
    setOverrideBannerMobileImage(bannerMobile);
  };

  const clearOverrideBanner = () => {
    console.log("BANNER", "CLEAR");
    setOverrideBannerDesktopImage(undefined);
    setOverrideBannerMobileImage(undefined);
  };

  const value = {
    setOverrideBannerDesktopImage,
    clearOverrideBanner,
    overrideBannerDesktopImage,
    overrideBannerMobileImage,
  };

  return (
    <headerContext.Provider value={value}>{children}</headerContext.Provider>
  );
};

export default HeaderContextProviderComponent;

export const useHeaderContext = () => useContext(headerContext);
