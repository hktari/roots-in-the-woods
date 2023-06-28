import React from "react";
import { Link, PageProps, StaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import LineupStage from "../../components/lineup/Stage";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {
  const noImagePlaceholder: IGatsbyImageData =
    data.noImagePlaceholder.nodes[0].gatsbyImageData;

  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <LineupStage
          title="Main Stage"
          artistNodes={data.allArtistsJson.nodes.filter(
            (artist) => artist.stage === "main_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
          noImagePlaceholder={noImagePlaceholder}
        />
      </section>
      <section id="dubStage" className="c-page-lineup__stage">
        <LineupStage
          title="Dub Stage"
          artistNodes={data.allArtistsJson.nodes.filter(
            (artist) => artist.stage === "dub_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
          noImagePlaceholder={noImagePlaceholder}
        />
      </section>
      <section id="jungleDnbStage" className="c-page-lineup__stage">
        <LineupStage
          title="Jungle / Drum & Bass Stage"
          artistNodes={data.allArtistsJson.nodes.filter(
            (artist) => artist.stage === "jungle_dnb_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
          noImagePlaceholder={noImagePlaceholder}
        />
      </section>
    </div>
  );
};

export default LineupPage;

export const query = graphql`
  query AllArtistsPage {
    allArtistsJson(sort: {order: ASC, fields: order}) {
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
