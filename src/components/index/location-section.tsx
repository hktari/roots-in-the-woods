import React from "react";

import locationImg from "../../data/images/location-1.jpg";

type Props = {};

const LocationSection = (props: Props) => {
  return (
    <section className="c-section">
      <div className="row">
        <h2 className="c-section__title d-flex align-items-center justify-content-start">
          <i className="bi bi-geo-alt-fill fs-3 me-2"></i>
          <span>Where ?</span>
        </h2>
        <div className="col-12 col-md-6 px-0 mt-3 mt-md-0">
          <img className="img-fluid" src={locationImg} alt="" />
        </div>
        <div className="col-12 col-md-6 px-md-4 d-flex flex-column">
          <p className="c-section__text mt-4 mt-md-0 flex-grow-1">
            In the forests of the Pohorje Mountains, we want to become a safe,
            comfortable place where people will want to visit for a dose of
            positive energy.
            <br />
            <br />
            Set in an idyllic natural environment we will enjoy the many
            benefits of boutique music and arts festival
          </p>
          <button className="btn btn-primary w-100 btn-lg c-button-link mt-4">
            <a href="https://goo.gl/maps/TjAbVy584FnfvFth8">SHOW ON MAP</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
