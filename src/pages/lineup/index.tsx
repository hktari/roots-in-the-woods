import React from "react";
import HarisPiltonCover from "../../images/artists/Haris Pilton/Haris pilton story 2.jpg";
import JahklinCover from "../../images/artists/Jahklin/FB_IMG_1685020590047.jpg";
import KoneskiCover from "../../images/artists/Koneski/koneski _story2.jpg";

import LineupArtist from "./artist";

type Props = {};

const LineupPage = (props: Props) => {
  const artists = [
    {
      title: "Haris Pilton",
      img: HarisPiltonCover,
      link: "https://soundcloud.com/harispilton",
    },
    {
      title: "Jahklin",
      img: JahklinCover,
      link: "https://www.mixcloud.com/jahklinselecta/",
    },
    {
      title: "Koneski",
      img: KoneskiCover,
      link: "https://soundcloud.com/harispilton",
    },
    {
      title: "Haris Pilton",
      img: HarisPiltonCover,
      link: "https://soundcloud.com/harispilton",
    },
    {
      title: "Haris Pilton",
      img: HarisPiltonCover,
      link: "https://soundcloud.com/harispilton",
    },
    {
      title: "Haris Pilton",
      img: HarisPiltonCover,
      link: "https://soundcloud.com/harispilton",
    },
  ];
  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {artists.map((artist) => (
            <LineupArtist artist={artist} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LineupPage;
