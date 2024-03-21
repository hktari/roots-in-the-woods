import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

import * as React from "react";
import Layout from "./src/components/layout/layout";
import { CartProvider } from "use-shopping-cart";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return (
    <CartProvider
      cartMode="checkout-session"
      shouldPersist
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      currency="EUR"
    >
      <Layout {...props}>{element}</Layout>
    </CartProvider>
  );
};
