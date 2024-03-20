import React from "react";
import { DebugCart } from "use-shopping-cart";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";
import { makeGroupsOf } from "../../util/format";
import MerchItem from "../../components/merch/merch-item";
import Products from "../../components/products/products";

import { CartProvider } from "use-shopping-cart";

const MerchPage = ({ data }: PageProps<Queries.MerchPageQuery>) => {
  return (
    <>
      <CartProvider
        cartMode="checkout-session"
        shouldPersist
        stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY!}
        currency="EUR"
      >
        <div className="container">
          <div className="px-0">
            <h1 className="c-page__title my-md-4">Merchandise</h1>
          </div>
          <Products />

          <DebugCart />
          <div className="text-center mt-4">
            <Link
              className="btn btn-primary btn-lg text-white"
              to="/merch/order"
            >
              ORDER MERCH
            </Link>
          </div>
        </div>
      </CartProvider>
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
