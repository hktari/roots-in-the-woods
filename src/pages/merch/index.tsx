import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";
import { makeGroupsOf } from "../../util/format";
import MerchItem from "../../components/merch/merch-item";

const MerchPage = ({ data }: PageProps<Queries.MerchPageQuery>) => {
  return (
    <>
      <div className="container">
        <h1 className="c-page__title my-md-4">Merchandise</h1>
        {makeGroupsOf(data.merch.edges, 3).map((edgeGroup, groupIdx) => (
          <div className="row" key={groupIdx}>
            {edgeGroup.map((edge) => (
              <div className="col-12 col-md-4 mt-5 mt-md-4" key={edge.node.id}>
                <MerchItem {...edge.node} />
              </div>
            ))}
          </div>
        ))}

        <div className="text-center">
          <Link className="btn btn-primary btn-lg text-white" to="/merch/order">ORDER MERCH</Link>
        </div>
      </div>
    </>
  );
};

export default MerchPage;

export const query = graphql`
  query MerchPage {
    merch: allContentfulMerch {
      edges {
        node {
          image {
            gatsbyImageData(aspectRatio: 1, width: 460, cropFocus: CENTER)
            filename
          }
          price
          title
          id
          description {
            description
          }
        }
      }
    }
  }
`;
