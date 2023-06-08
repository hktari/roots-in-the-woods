import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.allArtistsPageQuery>) => {
  const ARTIST_IMAGES_PATH = "../data/images/artists/";

  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allArtistsJson.nodes.map((artist) => (
            <a key={artist.id} className="c-lineup-artist" href={artist.link!}>
              <StaticImage
                className="c-lineup-artist__cover"
                src={`${ARTIST_IMAGES_PATH}${artist.img}`}
                alt=""
              ></StaticImage>
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
  query allArtistsPage {
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
