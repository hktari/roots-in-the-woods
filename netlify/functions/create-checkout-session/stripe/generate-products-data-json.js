(async () => {
  console.log("Generating Stripe products.json");

  const { join } = require("path");
  const { writeFile } = require("fs");
  const { mapStripeProduct } = require("./map-product");
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  console.log("Fetching data...");
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const productsMapped = products.data.map((price) => mapStripeProduct(price));

  const DefaultPath = "data/";

  const productJsonFilePath = join(

    process.env.STRIPE_PRODUCTS_JSON_PATH || DefaultPath,
    "products.json"
  );

  console.log("Writing to: " + productJsonFilePath);

  writeFile(
    productJsonFilePath,
    JSON.stringify(productsMapped, null, 4),
    (error) => {
      if (error) {
        console.log("An error has occurred ", error);
        return;
      }
      console.log("Data written successfully to disk");
    }
  );
})();
