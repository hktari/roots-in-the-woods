import React from "react";
import { Link, PageProps, StaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import ArtistCoverImage from "../../components/lineup/ArtistCoverImage";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {
  const ARTIST_IMAGES_PATH = "../data/images/artists/";

  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allArtistsJson.nodes.map((artist) => (
            <a key={artist.id} className="c-lineup-artist" href={artist.link!}>
              <ArtistCoverImage artist={artist} />
              <h4 className="c-lineup-artist__title">{artist.title}</h4>
            </a>
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
        img
        link
        title
        id
      }
    }
  }
`;
