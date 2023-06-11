import React from "react";
import { Link, PageProps, StaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import ArtistCoverImage from "../../components/lineup/ArtistCoverImage";
import LineupArtist from "../../components/lineup/Artist";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {
  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allArtistsJson.nodes.map((artist) => (
            <LineupArtist
              artist={artist}
              imageNodes={data.allImageSharp.nodes}
            />
          ))}
        </div>
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
