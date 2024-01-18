import React from "react";
import LineupArtist from "./Artist";
import { IGatsbyImageData } from "gatsby-plugin-image";


type Arist =  {

}

type Props = {
  artistNodes: Queries.ContentfulArtist[];
  noImagePlaceholder: IGatsbyImageData;
  title: string;
};

const LineupStage = ({
  artistNodes,
  title,
  noImagePlaceholder,
}: Props) => {
  return (
    <div className="c-lineup-stage">
      <h2 className="c-lineup-stage__title">{title}</h2>
      <div className="c-lineup-stage__list">
        {artistNodes.map((artist) => (
          <div className="c-lineup-stage__list-item">
            <LineupArtist
              artist={artist}
              noImagePlaceholder={noImagePlaceholder}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineupStage;
