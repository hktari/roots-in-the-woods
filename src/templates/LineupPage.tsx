import { PageProps, graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import LineupStage from "../components/lineup/Stage";
import _groupBy from "lodash/groupBy";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.LineupDetailPageQuery>) => {
  const noImagePlaceholder: IGatsbyImageData =
    data.noImagePlaceholder.nodes[0].gatsbyImageData;

  const artistsByStage = _groupBy(
    data.contentfulLineup?.artists,
    (artist) => artist?.stage
  );

  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      {JSON.stringify(artistsByStage)}
      {/*<section id="mainStage" className="c-page-lineup__stage">

         <LineupStage
          title="Main Stage"
          artistNodes={data.contentfulLineup?.artists.filter(
            (artist) => artist.stage === "main_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
          noImagePlaceholder={noImagePlaceholder}
        />
      </section>
      <section id="dubStage" className="c-page-lineup__stage">
        <LineupStage
          title="Dub Stage"
          artistNodes={data.allArtistsJson.nodes.filter(
            (artist) => artist.stage === "dub_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
          noImagePlaceholder={noImagePlaceholder}
        />
      </section>
      <section id="jungleDnbStage" className="c-page-lineup__stage">
        <LineupStage
          title="Jungle / Drum & Bass Stage"
          artistNodes={data.allArtistsJson.nodes.filter(
            (artist) => artist.stage === "jungle_dnb_stage"
          )}
          imageNodes={data.allImageSharp.nodes}
          noImagePlaceholder={noImagePlaceholder}
        />
      </section> */}
    </div>
  );
};
export default LineupPage;

export const query = graphql`
  query LineupDetailPage($id: String!) {
    contentfulLineup(id: { eq: $id }) {
      artists {
        countryOfOrigin
        name
        photo {
          gatsbyImageData
        }
        socialMediaLink
        stage
      }
      id
      name
    }

    noImagePlaceholder: allImageSharp(
      filter: { fixed: { originalName: { regex: "/logo/" } } }
    ) {
      nodes {
        gatsbyImageData(width: 512)
        fixed {
          originalName
        }
      }
    }
  }
`;
