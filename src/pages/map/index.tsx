import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";

const MapPage = ({ data }: PageProps<Queries.MapPageQuery>) => {
  const { gatsbyImageData: mapImage, title } =
    data?.contentfulMap?.mapImage || {};
  if (!title || !mapImage)
    throw new Error("Map Site not configured. Needs title and image");

  return (
    <>
      <h1 className="c-page__title d-md-none">Map</h1>
      <div className="py-5">
        <GatsbyImage image={mapImage} alt={title} />
      </div>
      <div className="d-md-none" style={{ height: "150px" }}></div>
    </>
  );
};

export const query = graphql`
  query MapPage {
    contentfulMap {
      mapImage {
        gatsbyImageData(layout: CONSTRAINED)
        title
      }
    }
  }
`;

export default MapPage;
