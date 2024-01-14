import { PageProps, graphql } from "gatsby";
import React from "react";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.LineupDetailPageQuery>) => {
    // TODO: use static query
  return <div>{JSON.stringify(data)}</div>;
};

export const query = graphql`
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
`;

export default LineupPage;
