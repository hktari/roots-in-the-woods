import { PageProps, graphql } from "gatsby";
import React from "react";
import { CartProvider } from "use-shopping-cart";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import StripeProductComponent from "../../components/products/stripeProduct";
import { mapStripeProduct } from "../../../stripe/map-product";

type Props = {};

const StripeProductPage = ({
  data,
}: PageProps<Queries.StripeProductPageQuery>) => {
  const product = mapStripeProduct({
    ...data.stripeProduct,
    default_price: data.stripePrice,
  });
  return (
    <CartProvider
      cartMode="checkout-session"
      shouldPersist
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY!}
      currency="EUR"
    >
      {JSON.stringify(data, null, 4)}
      <StripeProductComponent product={product} />
      <ShoppingCart />
    </CartProvider>
  );
};

export default StripeProductPage;

export const query = graphql`
  query StripeProductPage($id: String) {
    stripeProduct(id: { eq: $id }) {
      id
      name
      default_price
      description
      images
    }
    stripePrice(product: { id: { eq: $id } }) {
      id
      currency
      product {
        name
      }
      unit_amount
    }
  }
`;
