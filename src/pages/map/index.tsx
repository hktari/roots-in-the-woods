import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LineupPage = () => {
  return (
    <>
      <h1 className="c-page__title d-md-none">Map</h1>
      <div className="py-5">
        <StaticImage
          src="../../data/images/map.png"
          alt="festival map"
          height={650}
        />
      </div>
      <div className="d-md-none" style={{ height: "150px" }}></div>
    </>
  );
};

export default LineupPage;
