import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { Artist } from "../../interface/artist";

type Props = {};

const LineupPage = ({ data }: PageProps<Queries.allArtistsQueryQuery>) => {
  return (
    <div className="c-page-lineup">
      <h1 className="c-page__title">2023 Lineup</h1>
      <section id="mainStage" className="c-page-lineup__stage">
        <h2>Main Stage</h2>
        <div className="c-page-lineup__list">
          {data.allDataJson.nodes[0].artists.map((artist) => (
            <Link
            key={artist.uid}
              className="c-page-lineup__list-item"
              to={`/lineup/${artist?.id}`}
            >
              {artist?.title}
            </Link>
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
          id
          img
          link
          title
        }
      }
    }
  }
`;
