import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import reggaeTexture from "../../images/reggae-texture.jpg";

type Props = {};

const WhenSection = (props: Props) => {
  return (
    <section className="c-section">
      <div className="row">
        <div className="col-12 px-0">
          <div className="c-when-section__wrapper">
            {/* <StaticImage layout="fullWidth" alt="reggae texture" height={158} src="../../images/reggae-texture.jpg" className="c-when-section__bg"/> */}
            <div
              className="c-when-section__text"
              style={{ backgroundImage: `url("${reggaeTexture}")` }}
            >
              <span className="c-when-section__span" 
              >24 - 26</span>
              <br />
              <span className="c-when-section__span">August </span>
              <span className="c-when-section__span">2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenSection;
