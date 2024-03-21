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

module.exports = {
  mapToProduct,
};
