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
  ]);

  return countryIconMap.get(country);
}

type Props = {
  artist: Queries.AllArtistsPageQuery["allArtistsJson"]["nodes"][0];
  imageNodes: Queries.AllArtistsPageQuery["allImageSharp"]["nodes"];
  noImagePlaceholder: IGatsbyImageData;
};

const LineupArtist = ({ artist, imageNodes, noImagePlaceholder }: Props) => {
  let imageData = noImagePlaceholder;
  let imageName = "roots in the woods logo";
  
  try {
    [imageData, imageName] = findImageForArtist(artist, imageNodes);
  } catch (error) {}

  const links = parseArtistLinks(artist.links || []);
  const soundCloudLinkOrFirst =
    links.find((link) => link.type === _ArtistLinkType.SOUNDCLOUD) || links[0];

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
      <h4 className="c-lineup-artist__title">
        {artist.title}
        <span className="c-lineup-artist__country">
          {" "}
          {artist.country && parseArtistCountry(artist.country)}
        </span>
      </h4>
    </a>
  );
};

export default LineupArtist;
