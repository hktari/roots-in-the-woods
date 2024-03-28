(async () => {
  require("dotenv").config({
    path: `../.env.${process.env.NODE_ENV}`,
  });

  const { mapStripeProduct } = require("./map-product");
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  console.log(JSON.stringify(products, null, 4));

  const productsMapped = products.data.map((price) => mapStripeProduct(price));
  console.log(JSON.stringify(productsMapped, null, 4));
})();
