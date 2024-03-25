import React from "react";
import { DebugCart } from "use-shopping-cart";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";
import { makeGroupsOf } from "../../util/format";

import { CartProvider } from "use-shopping-cart";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import ProductCard from "../../components/products/productCard";
import { mapToProduct } from "../../util/products";

const MerchPage = ({ data }: PageProps<Queries.MerchPageQuery>) => {
  return (
    <>
      <div className="container">
        <div className="px-0">
          <h1 className="c-page__title my-md-4">Merchandise</h1>
        </div>
        {makeGroupsOf(data.prices.edges, 3).map((edgeGroup, groupIdx) => (
          <div className="row" key={groupIdx}>
            {edgeGroup.map((edge) => (
              <div
                className="col-12 col-md-4 mt-5 mt-md-4 d-flex align-items-center"
                key={edge.node.id}
              >
                <ProductCard product={mapToProduct(edge.node)} />
              </div>
            ))}
          </div>
        ))}

        {/* <DebugCart /> */}
      </div>
      <ShoppingCart />
    </>
  );
};

export default MerchPage;

export const query = graphql`
  query MerchPage {
    prices: allStripePrice(
      filter: { active: { eq: true } }
      sort: { fields: [unit_amount] }
    ) {
      edges {
        node {
          id
          active
          currency
          unit_amount
          product {
            id
            name
            images
          }
        }
      }
    }
  }
`;
