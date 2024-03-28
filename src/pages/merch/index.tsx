import React from "react";
import { DebugCart } from "use-shopping-cart";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";
import { makeGroupsOf, makeGroupsOfT } from "../../util/format";

import { CartProvider } from "use-shopping-cart";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import ProductCard from "../../components/products/productCard";
import { mapStripeProduct } from "../../../stripe/map-product";
import { productPriceFragment } from "../../components/products/price";

const MerchPage = ({ data }: PageProps<Queries.MerchPageQuery>) => {
  const prices = data.prices.edges.map((edge) => edge.node);

  const getPriceForProduct = (
    product: Queries.MerchPageQuery["products"]["edges"][0]["node"]
  ) => {
    return prices.find((price) => price.id === product.default_price);
  };

  const products = data.products.edges.map((edge) =>
    mapStripeProduct({
      ...edge.node,
      default_price: getPriceForProduct(edge.node),
    })
  );

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
          {makeGroupsOfT(products, 3).map((productGroup, groupIdx) => (
            <div className="row" key={groupIdx}>
              {productGroup.map((product) => (
                <div
                  className="col-12 col-md-4 mt-5 mt-md-4 d-flex align-items-center"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <ShoppingCart />
      </CartProvider>
    </>
  );
};

export default MerchPage;

export const query = graphql`
  query MerchPage {
    products: allStripeProduct {
      edges {
        node {
          default_price
          description
          id
          name
          images
        }
      }
    }
    prices: allStripePrice {
      edges {
        node {
          id
          unit_amount
          currency
        }
      }
    }
  }
`;
