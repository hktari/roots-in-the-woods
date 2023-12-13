import { useStaticQuery, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { createContext, useContext, useMemo, useState } from "react";

interface IHeaderContext {
  overrideBannerDesktopImage: IGatsbyImageData | null;
  overrideBannerMobileImage: IGatsbyImageData | null;
  setOverrideBanner: (
    bannerDesktop: IGatsbyImageData,
    bannerMobile: IGatsbyImageData
  ) => void;
  clearOverrideBanner: VoidFunction;
}

const headerContext = createContext<IHeaderContext>({
  overrideBannerDesktopImage: null,
  overrideBannerMobileImage: null,
  setOverrideBanner: (bannerDesktop, bannerMobile) => {
    return;
  },
  clearOverrideBanner: () => {
    return;
  },
});

const HeaderContextProviderComponent = ({ children }) => {
  const [overrideBannerDesktopImage, setOverrideBannerDesktopImage] =
    useState<IGatsbyImageData | null>(null);
  const [overrideBannerMobileImage, setOverrideBannerMobileImage] =
    useState<IGatsbyImageData | null>(null);

  const setOverrideBanner = useMemo(
    () => (bannerDesktop: IGatsbyImageData, bannerMobile: IGatsbyImageData) => {
      setOverrideBannerDesktopImage(bannerDesktop);
      setOverrideBannerMobileImage(bannerMobile);
    },
    []
  );

  const clearOverrideBanner = () => {
    setOverrideBannerDesktopImage(null);
    setOverrideBannerMobileImage(null);
  };

  const value = {
    setOverrideBanner,
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
