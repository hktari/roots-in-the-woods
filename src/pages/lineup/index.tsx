import React from "react";
import LineupArtist from "../../components/artist";
import { graphql } from "gatsby";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.allArtistsQueryQuery>) => {
  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allDataJson.nodes[0].artists.map((artist) => (
            <LineupArtist artist={artist} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LineupPage;

export const query = graphql`
  query allArtistsQuery {
    allDataJson {
      nodes {
        artists {
          img
          link
          title
        }
      }
    }
  }
`;
