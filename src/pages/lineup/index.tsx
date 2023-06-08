import React from "react";
import { Link, PageProps, StaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import ArtistCoverImage from "../../components/lineup/ArtistCoverImage";

type Props = {};

function findImageForArtist(
  artist: Queries.AllArtistsPageQuery["allArtistsJson"]["nodes"][0],
  images: Queries.AllArtistsPageQuery["allImageSharp"]["nodes"]
): IGatsbyImageData | undefined {
  const imageNode = images.find((image) =>
    artist.img?.includes(image.fixed?.originalName!)
  );
  return imageNode?.gatsbyImageData;
}

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {

  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allArtistsJson.nodes.map((artist) => {
            const imageData = findImageForArtist(
              artist,
              data.allImageSharp.nodes
            );
            if (!imageData) {
              // TODO-BK: load placeholder image
            }

            return (
              <a
                key={artist.id}
                className="c-lineup-artist"
                href={artist.link!}
              >
                <GatsbyImage
                  className="c-lineup-artist__cover"
                  image={imageData}
                  alt={artist.img}
                ></GatsbyImage>
                <h4 className="c-lineup-artist__title">{artist.title}</h4>
              </a>
            );
          })}
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
