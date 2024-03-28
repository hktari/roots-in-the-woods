const { mapStripeProduct } = require("./map-product");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function getProducts() {
  console.log("Fetching data...");
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return products.data.map((price) => mapStripeProduct(price));
}

module.exports = { getProducts };
