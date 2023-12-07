import React from "react";
import Header from "../header/header";

import "../../css/main.scss";
import Footer from "../footer";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [disableScroll, setDisableScroll] = useState(false);

  return (
    <main className={`c-page ${disableScroll ? "c-page--no-scroll" : ""}`}>
      <div className="c-page__content container-md pb-5">
        <Header setDisableScroll={setDisableScroll} />
        {children}
      </div>
      <div className="c-page__footer">
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
