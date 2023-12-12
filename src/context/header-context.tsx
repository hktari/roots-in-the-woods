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
  const [bannerDesktopImage, setBannerDesktopImage] =
    useState<IGatsbyImageData>();
  const [bannerMobileImage, setBannerMobileImage] =
    useState<IGatsbyImageData>();

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
