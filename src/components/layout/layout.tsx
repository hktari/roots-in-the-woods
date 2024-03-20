import React from "react";
import Header from "../header/header";

import "../../css/main.scss";
import Footer from "../footer";
import { useState } from "react";
import HeaderContextProviderComponent from "../../context/header-context";


type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [disableScroll, setDisableScroll] = useState(false);

  return (
    <main className={`c-page ${disableScroll ? "c-page--no-scroll" : ""}`}>
      <HeaderContextProviderComponent>
        <div className="c-page__content">
          <Header setDisableScroll={setDisableScroll} />
          <div className="container-md pb-5">{children}</div>
        </div>
      </HeaderContextProviderComponent>
      <div className="c-page__footer">
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
