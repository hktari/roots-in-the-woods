import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

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

function parseArtistCountry(country: string) {
  const countryIconMap = new Map([
    ["slovenia", "🇸🇮"],
    ["france", "🇫🇷"],
    ["serbia", "🇷🇸"],
    ["croatia", "🇭🇷"],
    ["italy", "🇮🇹"],
    ["germany", "🇩🇪"],
    ["austria", "🇦🇹"],
    ["uk", "🇬🇧"],
  ]);

  return countryIconMap.get(country.toLocaleLowerCase());
}

// todo: use GraphQL fragments
type Props = {
  artist: Queries.ContentfulArtist;
  noImagePlaceholder: IGatsbyImageData;
};

const LineupArtist = ({ artist, noImagePlaceholder }: Props) => {
  const imageData = artist.photo?.gatsbyImageData || noImagePlaceholder;
  const imageName = artist.photo?.filename || "Roots in the Woods logo";

  const soundCloudLinkOrFirst = artist.socialMediaLink;
  return (
    <a
      target="_blank"
      key={artist.id}
      className="c-lineup-artist"
      href={soundCloudLinkOrFirst || "#"}
    >
      <GatsbyImage
        className="c-lineup-artist__cover"
        image={imageData}
        alt={imageName}
      ></GatsbyImage>
      <h4 className="c-lineup-artist__title">
        {artist.name}
        <span className="c-lineup-artist__country">
          {" "}
          {artist.countryOfOrigin && parseArtistCountry(artist.countryOfOrigin)}
        </span>
      </h4>
    </a>
  );
};

export default LineupArtist;
