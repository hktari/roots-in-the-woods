import { PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type Props = {};

const ArtistCoverImage = ({ data }: PageProps<Queries.ArtistCoverImageQuery>) => {
  return (
    <GatsbyImage
      className="c-lineup-artist__cover"
      image={data.allImageSharp.nodes[0].gatsbyImageData}
      alt=""
    ></GatsbyImage>
  );
};

export default ArtistCoverImage;

export const query = graphql`
  query ArtistCoverImage {
    allImageSharp(
      filter: {
        fixed: { originalName: { glob: "**/Haris pilton story 2.jpg" } }
      }
    ) {
      nodes {
        gatsbyImageData(width: 512)
      }
    }
  }
`;
