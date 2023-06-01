import React from "react";

export interface Artist {
  title: string;
  link: string;
  img: string;
}

type Props = {
  artist: Artist;
};

const LineupArtist = ({ artist }: Props) => {
  return (
    <a className="c-lineup-artist" href={artist.link}>
      <img className="c-lineup-artist__cover" src={artist.img} alt="" />
      <h4 className="c-lineup-artist__title">{artist.title}</h4>
    </a>
  );
};

export default LineupArtist;
