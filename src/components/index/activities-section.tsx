import React from "react";

import activity3Image from "../../images/activity-3.jpg";
import activity4Image from "../../images/activity-4.jpg";
import activity5Image from "../../images/activity-5.jpg";
import activity6Image from "../../images/activity-6.jpg";
import ActivityItem from "../activity-item";
import InfoItem from "../info-item";
import { PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  activities: PageProps<Queries.IndexPageQuery>["data"]["activities"];
};

const ActivitiesSection = ({ activities }: Props) => {
  return (
    <section className="c-section">
      <h2 className="c-section__title">Activities</h2>

      {/* desktop */}
      <div
        id="carouselDesktop"
        className="carousel slide d-none d-md-block"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div className="carousel-inner" data-bs-ride="carousel">
          {
            // make groups of two
            activities.edges
              .reduce((group: any[], edge, idx) => {
                const groupIdx = idx % 2;
                group[`${groupIdx}`] = group[`${groupIdx}`] ?? [];
                group[`${groupIdx}`].push(edge.node);
                return group;
              }, [])
              .map((group: any, groupIdx) => (
                <div
                  key={groupIdx}
                  className={`carousel-item ${groupIdx === 0 ? "active" : ""}`}
                  data-bs-interval="6000"
                >
                  <div className="row">
                    {group.map(
                      (
                        activity: PageProps<Queries.IndexPageQuery>["data"]["activities"]["edges"][0]["node"]
                      ) => (
                        <div key={activity.title} className="col-6">
                          <ActivityItem
                            title={activity.title!}
                            description={activity.description!}
                            image={activity.image?.gatsbyImageData!}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))
          }
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDesktop"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDesktop"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* mobile */}
      <div className="row">
        <div className="col px-0">
          <div
            id="carouselMobile"
            className="carousel slide d-md-none"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner " data-bs-ride="carousel">
              {activities.edges.map((edge, idx) => (
                <div
                  key={edge.node.title}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  data-bs-interval="3500"
                >
                  <ActivityItem
                    title={edge.node.title!}
                    description={edge.node.description!}
                    image={edge.node.image?.gatsbyImageData!}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMobile"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMobile"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
