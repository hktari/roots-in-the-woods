import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = {
  product: StripeProduct;
};

const StripeProductPage = ({ product }: Props) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold"> {product?.name} </h2>
          <h4 className=" fs-2">{product?.price} €</h4>
          <p className="my-2 my-md-4">{product?.description}</p>
          <Link className="btn btn-primary btn-lg text-white" to="/merch/order">
            ORDER
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <div className="my-2 my-md-0">
            <img src={product?.image} alt={product?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripeProductPage;
