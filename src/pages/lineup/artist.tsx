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
    <div className="c-lineup-artist">
      <a href={artist.link}>
        <img className="c-lineup-artst__cover" src={artist.img} alt="" />
        <h4 className="c-lineup-artist__title">{artist.title}</h4>
      </a>
    </div>
  );
};

export default LineupArtist;
