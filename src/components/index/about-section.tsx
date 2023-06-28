import React from "react";

import aboutImgTwo from "../../images/stereo-black-white.jpg";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="c-section">
      <div className="row gx-5">
        <div className="col-12 mt-3 mb-2 text-center">
          <h2 className="c-section__title">Sound system culture festival</h2>
        </div>
        <div className="col-12 col-md-6 mt-3 ">
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
        <div className="col-12 col-md-6 mt-3 px-0">
          <p className="c-section__text mt-4 mt-md-0 flex-grow-1">
            In addition to promoting reggae culture and soundsystems, we also
            encourage opportunities for various artistic pursuits.
            <br />
            <br />
            These are manifested in the many content-rich workshops occuring during
            the festival: massages, yoga, gong meditation, jewellery workshop,
            dance class, drum circle, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
