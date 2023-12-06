import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";
import { makeGroupsOf } from "../../util/format";

const MerchPage = ({ data }: PageProps<Queries.MerchPageQuery>) => {
  const MerchItem = ({
    id,
    title,
    description,
    price,
    image,
  }: ContentfulMerch) => {
    return (
      <Link to={`/merch/${id}`} >
        <div className="card text-bg-dark">
          <GatsbyImage image={image.gatsbyImageData} alt={image.filename} />
          <div className="card-img-overlay">
            <h2 className="card-title">{title}</h2>
            <h3 className="card-title">{price} €</h3>
            <p className="card-text">{description.description}</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="c-page__title">Merchandise</h1>
        {makeGroupsOf(data.merch.edges, 3).map((edgeGroup, groupIdx) => (
          <div className="row" key={groupIdx}>
            {edgeGroup.map((edge) => (
              <div className="col col-md-4" key={edge.node.id}>
                <MerchItem {...edge.node} />
              </div>
            ))}
          </div>
        ))}
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
