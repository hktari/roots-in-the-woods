function mapStripeProduct(stripeProduct) {
  return {
    id: stripeProduct.id,
    // Line item name to be shown on the Stripe Checkout page
    name: stripeProduct.name,
    // Optional description to be shown on the Stripe Checkout page
    description: stripeProduct.description,
    // A unique identifier for this item (stock keeping unit)
    sku: stripeProduct.sku,
    // price in smallest currency unit (e.g. cent for USD)
    price: stripeProduct.default_price.unit_amount,
    currency: stripeProduct.default_price.currency,
    // Optional image to be shown on the Stripe Checkout page
    image: stripeProduct.images.length > 0 ? stripeProduct.images[0] : null,
  };
}

function mapToProduct(priceNode) {
  return {
    id: priceNode.id,
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

module.exports = {
  mapToProduct,
  mapStripeProduct
};
