import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { createContext, useContext, useState } from "react";

interface IHeaderContext {
  overrideBannerDesktopImage?: IGatsbyImageData;
  overrideBannerMobileImage?: IGatsbyImageData;
  setOverrideBanner: (
    bannerDesktop: IGatsbyImageData,
    bannerMobile: IGatsbyImageData
  ) => void;
  clearOverrideBanner: VoidFunction;
}

const headerContext = createContext<IHeaderContext>({
  setOverrideBanner: (bannerDesktop, bannerMobile) => {
    return;
  },
  clearOverrideBanner: () => {
    return;
  },
});

const HeaderContextProviderComponent = ({ children }) => {
  const [bannerDesktopImage, setBannerDesktopImage] =
    useState<IGatsbyImageData>();
  const [bannerMobileImage, setBannerMobileImage] =
    useState<IGatsbyImageData>();

  const setOverrideBanner = (
    bannerDesktop: IGatsbyImageData,
    bannerMobile: IGatsbyImageData
  ) => {
    setBannerDesktopImage(bannerDesktop);
    setBannerMobileImage(bannerMobile);
  };

  const clearOverrideBanner = () => {
    setBannerDesktopImage(undefined);
    setBannerMobileImage(undefined);
  };

  const value = {
    setOverrideBanner,
    clearOverrideBanner,
    bannerDesktopImage,
    bannerMobileImage,
  };
  return (
    <headerContext.Provider value={value}>{children}</headerContext.Provider>
  );
};

export default HeaderContextProviderComponent;

export const useHeaderContext = () => useContext(headerContext);
