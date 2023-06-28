import React from "react";

type Props = {};

import soundSystemImage from "../data/images/soundsystem-bg.jpg";
import soundSystemImageMobile from "../data/images/soundsystem-bg-mobile.jpg";

const GetTicketCta = (props: Props) => {
  return (
    <div className="c-section">
      <div className="row">
        <div className="col px-0">
          <div className="c-get-ticket-cta">
            <picture>
              <source
                media="(max-width: 576px)"
                srcSet={soundSystemImageMobile}
              />
              <img
                className="c-get-ticket-cta__image"
                src={soundSystemImageMobile}
                alt="sound system"
              />
            </picture>
            <button className="c-get-ticket-cta__btn c-button-link">
              <a href="https://fienta.com/roots-in-the-woods-2023">
                GET TICKET
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTicketCta;
