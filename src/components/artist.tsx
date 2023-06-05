import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export interface Artist {
  title: string;
  link: string;
  img: string;
}

type Props = {
  artist: Artist;
};

const ARTIST_IMAGES_PATH = "../data/imaqes/artists/Haris Pilton/Haris pilton story 2.jpg";
const LineupArtist = ({ artist }: Props) => {
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
