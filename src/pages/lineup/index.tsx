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
): [IGatsbyImageData, string] {
  const imageName = artist.images?.[0];

  if (!imageName) {
    throw new Error(`Artist ${artist?.id} has no image assigned `);
  }

  const imageNode = images.find((image) =>
    imageName.includes(image.fixed?.originalName!)
  );

  if (!imageNode?.gatsbyImageData) {
    throw new Error(`Failed to find image with name ${imageName}`);
  }

  return [imageNode.gatsbyImageData, imageName];
}

const _ArtistLinkType = {
  FB: "Facebook",
  SOUNDCLOUD: "SoundCloud",
} as const;
type ArtistLinkType = (typeof _ArtistLinkType)[keyof typeof _ArtistLinkType];

interface ArtistLink {
  type: ArtistLinkType;
  url: string;
}

function parseArtistLinks(links: string[]): ArtistLink[] {
  const artistLinks: ArtistLink[] = [];
  for (const link of links) {
    if (link.match(/facebook/)) {
      artistLinks.push({
        url: link,
        type: _ArtistLinkType.FB,
      });
    } else if (link.match("/soundcloud")) {
      artistLinks.push({
        url: link,
        type: _ArtistLinkType.SOUNDCLOUD,
      });
    }
  }

  return artistLinks;
}

const LineupPage = ({ data }: PageProps<Queries.AllArtistsPageQuery>) => {
  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allArtistsJson.nodes.map((artist) => {
            const [imageData, imageName] = findImageForArtist(
              artist,
              data.allImageSharp.nodes
            );

            const links = parseArtistLinks(artist.links || []);
            const soundCloudLinkOrFirst =
              links.find((link) => link.type === _ArtistLinkType.SOUNDCLOUD) ||
              links[0];

            return (
              <a
                key={artist.id}
                className="c-lineup-artist"
                href={soundCloudLinkOrFirst?.url}
              >
                <GatsbyImage
                  className="c-lineup-artist__cover"
                  image={imageData}
                  alt={imageName}
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
