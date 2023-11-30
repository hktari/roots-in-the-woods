import React from "react";
import { Link, PageProps, StaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import LineupStage from "../../../components/lineup/Stage";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {
  const noImagePlaceholder: IGatsbyImageData =
    data.noImagePlaceholder.nodes[0].gatsbyImageData;

  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2024 Lineup</h1>
      <h3>coming soon...</h3>
    </div>
  );
};

export default LineupPage;

export const query = graphql`
  query AllArtistsPage {
    allArtistsJson(sort: { order: ASC, fields: order }) {
      nodes {
        country
        stage
        images
        links
        title
        order
        id
      }
    }

    allImageSharp {
      nodes {
        gatsbyImageData(width: 512)
        fixed {
          originalName
        }
      }
    }

    noImagePlaceholder: allImageSharp(
      filter: { fixed: { originalName: { regex: "/logo/" } } }
    ) {
      nodes {
        gatsbyImageData(width: 512)
        fixed {
          originalName
        }
      }
    }
  }
`;
