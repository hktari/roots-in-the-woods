import React from "react";
import LineupArtist from "./Artist";
import { IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  artistNodes: Queries.AllArtistsPageQuery["allArtistsJson"]["nodes"];
  imageNodes: Queries.AllArtistsPageQuery["allImageSharp"]["nodes"];
  noImagePlaceholder: IGatsbyImageData;
  title: string;
};

const LineupStage = ({ artistNodes, title, imageNodes, noImagePlaceholder }: Props) => {
  return (
    <div className="c-lineup-stage">
      <h2 className="c-lineup-stage__title">{title}</h2>
      <div className="c-lineup-stage__list">
        {artistNodes.map((artist) => (
          <LineupArtist
            artist={artist}
            imageNodes={imageNodes}
            noImagePlaceholder={noImagePlaceholder}
          />
        ))}
      </div>
    </div>
  );
};

export default LineupStage;
