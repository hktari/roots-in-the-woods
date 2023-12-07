import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = {};

const MerchDetailPage = ({ data }: PageProps<Queries.MerchDetailPageQuery>) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold"> {data.contentfulMerch?.title} </h2>
          <h4 className=" fs-2">{data.contentfulMerch?.price} €</h4>
          <p className="my-2 my-md-4">
            {data.contentfulMerch?.description?.description}
          </p>
          <Link className="btn btn-primary btn-lg text-white" to="/merch/order">
            ORDER
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <div className="my-2 my-md-0">
            <GatsbyImage
              image={data.contentfulMerch?.image?.gatsbyImageData!}
              alt={data.contentfulMerch?.image?.filename!}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchDetailPage;

export const query = graphql`
  query MerchDetailPage($id: String) {
    contentfulMerch(id: { eq: $id }) {
      id
      image {
        gatsbyImageData
        filename
      }
      price
      title
      description: description {
        description
      }
    }
  }
`;
