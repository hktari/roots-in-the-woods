import { PageProps, graphql } from "gatsby";
import React from "react";
import { CartProvider } from "use-shopping-cart";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import StripeProductComponent from "../../components/products/stripeProduct";
import { mapToProduct } from "../../util/products";

type Props = {};

const StripePricePage = ({ data }: PageProps<Queries.StripePricePageQuery>) => {
  const product = mapToProduct(data.stripePrice);

  return (
    <CartProvider
      cartMode="checkout-session"
      shouldPersist
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY!}
      currency="EUR"
    >
      <StripeProductComponent product={product} />
      <ShoppingCart />
    </CartProvider>
  );
};

export default StripePricePage;

export const query = graphql`
  query StripePricePage($id: String) {
    stripePrice(id: { eq: $id }) {
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
`;
