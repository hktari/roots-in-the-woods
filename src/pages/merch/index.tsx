import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";

const MerchPage = ({ data }: PageProps<Queries.MerchPageQuery>) => {
  const MerchItem = ({ title, description, price, image }: ContentfulMerch) => {
    return (
      <div className="card text-bg-dark">
        <GatsbyImage image={image.gatsbyImageData} alt={image.filename} />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{price} €</h5>
          <p className="card-text">{description.description}</p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="c-page__title d-md-none">Merchandise</h1>
      <div className="container">
        <div className="row">
          {data.merch.edges.map((edge) => (
            <div className="col" key={edge.node.id}>
              <MerchItem {...edge.node} />
            </div>
          ))}
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
            gatsbyImageData(aspectRatio: 1, height: 350, cropFocus: CENTER)
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
