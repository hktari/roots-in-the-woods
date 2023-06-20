import React from "react";

import aboutImgTwo from "../../images/stereo-black-white.jpg";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="c-section">
      <div className="row">
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <h2 className="c-section__title">Sound system culture festival</h2>
          <p className="c-section__text">
            The festival is organized by friends and enthusiasts of festival
            culture, who come from Slovenia. The vast majority of the organisers
            are locals who respect the idyllic natural environment that Pohorje
            offers.
            <br />
            <br />
            For this reason, we have a great desire to offer a unique experience
            on the beautiful Pohorje plains.{" "}
          </p>
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0 px-0">
          <StaticImage
            src={"../../data/images/party.jpg"}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
