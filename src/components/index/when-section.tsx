import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FrontPageDateSectionQuery } from "../../__generated__/types";

type Props = {};

const WhenSection = (props: Props) => {

  const { dateSection } = useStaticQuery<FrontPageDateSectionQuery>(graphql`
    query FrontPageDateSection {
      dateSection: contentfulFrontPageSectionDate {
        backgroundImage {
          url
        }
        startDate
        endDate
      }
    }`);

  if (!dateSection) {
    console.warn("contentfulFrontPageSectionDate is not defined. Make sure to add it inside Contentful")
    return null
  };

  const getEventDateString = () => {
    const startDate = new Date(dateSection.startDate!);
    const endDate = new Date(dateSection.endDate!);
    return startDate.getDate() + " - " + endDate.getDate()
  }

  const eventMonthString = new Date(dateSection.startDate!).toLocaleString(
    "en-us",
    {
      month: "long",
    }
  );
  const eventYearString = new Date(dateSection.startDate!).getFullYear();

  return (
    <section className="c-section">
      <div className="row gy-0">
        <div className="col-12 px-0">
          <div className="c-when-section__wrapper">
            <div
              className="c-when-section__text"
              style={{ backgroundImage: `url("${dateSection.backgroundImage?.url}")` }}
            >
              <span className="c-when-section__span">{getEventDateString()}</span>
              <br />
              <span className="c-when-section__span">{eventMonthString}{' '}</span>
              <span className="c-when-section__span">{eventYearString}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenSection;
