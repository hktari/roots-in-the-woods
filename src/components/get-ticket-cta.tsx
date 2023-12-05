import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import links from "../data/links";

type Props = {};

const GetTicketCta = (props: Props) => {
  return (
    <div className="c-section">
      <div className="row">
        <div className="col px-0">
          <div className="c-get-ticket-cta">
            <div className="d-md-none">
              <StaticImage
                src={"../data/images/soundsystem-bg-mobile.jpg"}
                width={768}
                alt="sound system"
              ></StaticImage>
            </div>
            <div className="d-none d-md-block">
              <StaticImage
                src={"../data/images/soundsystem-bg.jpg"}
                height={440}
                alt="sound system"
                objectPosition={"center center"}
              ></StaticImage>
            </div>
            <button className="c-get-ticket-cta__btn c-button-link">
              <a href={links.tickets}>GET TICKET</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTicketCta;
