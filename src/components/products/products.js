import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ProductCard from "./productCard";

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
};

function mapToProduct(priceNode) {
  return {
    id: priceNode.product.id,
    // Line item name to be shown on the Stripe Checkout page
    name: priceNode.product.name,
    // Optional description to be shown on the Stripe Checkout page
    description: priceNode.product.description,
    // A unique identifier for this item (stock keeping unit)
    sku: priceNode.product.sku,
    // price in smallest currency unit (e.g. cent for USD)
    price: priceNode.unit_amount,
    currency: priceNode.currency,
    // Optional image to be shown on the Stripe Checkout page
    image: priceNode.product.images[0],
  };
}

export default function Products(props) {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
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
      `}
      render={({ prices }) => {
        // Group prices by product

        const products = {};
        for (const { node: price } of prices.edges) {
          const product = mapToProduct(price);
          if (!products[product.id]) {
            products[product.id] = product;
          }
        }
        console.log(products);
        return (
          <div style={containerStyles}>
            {Object.keys(products).map((key) => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))}
          </div>
        );
      }}
    />
  );
}
