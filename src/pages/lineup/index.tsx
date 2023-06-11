import React from "react";
import { Link, PageProps, StaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import ArtistCoverImage from "../../components/lineup/ArtistCoverImage";
import LineupArtist from "../../components/lineup/Artist";
import LineupStage from "../../components/lineup/Stage";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {
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
        />
      </section>
      <section id="dubStage" className="c-page-lineup__stage">
        <LineupStage
          title="Dub Stage"
          artistNodes={data.allArtistsJson.nodes.filter(
            (artist) => artist.stage === "dub_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
        />
      </section>
    </div>
  );
};

export default LineupPage;

export const query = graphql`
  query AllArtistsPage {
    allArtistsJson {
      nodes {
        country
        stage
        images
        links
        title
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
  }
`;
