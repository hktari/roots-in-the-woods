function mapStripeProduct(stripeProduct) {
  return {
    id: stripeProduct.id,
    // Line item name to be shown on the Stripe Checkout page
    name: stripeProduct.name,
    // Optional description to be shown on the Stripe Checkout page
    description: stripeProduct.description,
    // price in smallest currency unit (e.g. cent for USD)
    price: stripeProduct.default_price.unit_amount,
    currency: stripeProduct.default_price.currency,
    // Optional image to be shown on the Stripe Checkout page
    image: stripeProduct.images.length > 0 ? stripeProduct.images[0] : null,
  };
}

module.exports = {
  mapStripeProduct
};
