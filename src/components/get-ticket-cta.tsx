import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Props = {};

const GetTicketCta = (props: Props) => {

  const { ticketsNavItem } = useStaticQuery<TicketsNavItemQuery>(graphql`
    query TicketsNavItem {
      ticketsNavItem :contentfulNavigationItem(title: {regex: "/.*ticket.*/i"}) {
        url
      }
  }`)

  if (!ticketsNavItem) {
    console.warn("Tickets nav item not found. Make sure a navigation item for 'tickets' exists inside Contentful");
    console.warn("Not rendering GetTicketCta");
    return null;
  }

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
              <a href={ticketsNavItem.url}>GET TICKET</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTicketCta;
