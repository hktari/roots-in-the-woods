import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Artist } from "../../interface/artist";
import { PageProps, graphql } from "gatsby";

type Props = {
  artist: Artist;
};

// TODO:
// 1. add id to artist
// 2. move to pages/
// 3. query by id
// reference image path ?
const ARTIST_IMAGES_PATH =
  "../data/imaqes/artists/Haris Pilton/Haris pilton story 2.jpg";
const LineupArtist = ({ artist }: PageProps<Queries.LineupArtistPageQuery>) => {
  return (
    <a className="c-lineup-artist" href={artist.link}>
      <StaticImage
        className="c-lineup-artist__cover"
        src={`${ARTIST_IMAGES_PATH}`}
        alt=""
      ></StaticImage>
      <h4 className="c-lineup-artist__title">{artist.title}</h4>
    </a>
  );
};

export default LineupArtist;

export const query = graphql`
  query LineupArtistPage($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      updatedAt
      text {
        raw
      }
      gallery {
        id
        title
        url
      }
    }
  }
`;
