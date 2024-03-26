import React, { createContext, useContext } from "react";
import Header from "../header/header";

import "../../css/main.scss";
import Footer from "../footer";
import { useState } from "react";
import HeaderContextProviderComponent from "../../context/header-context";
import { CartProvider } from "use-shopping-cart";

type Props = {
  children: React.ReactNode;
};

interface LayoutContextValue {
  disableScroll: boolean;
  setDisableScroll: (disableScroll: boolean) => void;
}
export const LayoutContext = createContext<LayoutContextValue>({
  disableScroll: null!,
  setDisableScroll: null!,
});

const Layout = ({ children }: Props) => {
  const [disableScroll, setDisableScroll] = useState<boolean>(false);

  return (
      <LayoutContext.Provider value={{ disableScroll, setDisableScroll }}>
        <main className={`c-page ${disableScroll ? "c-page--no-scroll" : ""}`}>
          <HeaderContextProviderComponent>
            <div className="c-page__content">
              <Header />
              <div style={{ position: "relative" }}>
                <div className="container-md pb-5">{children}</div>
              </div>
            </div>
          </HeaderContextProviderComponent>
          <div className="c-page__footer">
            <Footer />
          </div>
        </main>
      </LayoutContext.Provider>
  );
};

export default Layout;
