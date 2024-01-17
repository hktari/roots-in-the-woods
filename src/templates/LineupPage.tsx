import { PageProps, graphql, useStaticQuery } from "gatsby";
import React from "react";

type Props = {};

const LineupPage = (props: Props) => {
  // TODO: use static query
  const data = useStaticQuery(graphql`
    query LineupDetailPage {
      contentfulLineup(id: { eq: "55f6fdd8-5af3-582a-90dd-6f2b092f4425" }) {
        artists {
          countryOfOrigin
          name
          photo {
            gatsbyImageData
          }
          socialMediaLink
          stage
        }
        id
        name
      }
    }
  `);

  return <div>{JSON.stringify(data)}</div>;
};
export default LineupPage;
