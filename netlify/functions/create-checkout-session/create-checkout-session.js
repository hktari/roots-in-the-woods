// require("./stripe/generate-products-data-json");
// const inventory = require("./data/products.json");
const { getProducts } = require("./stripe/get-products");

const stripe = require("./lib/stripe");
const validateCartItems =
  require("use-shopping-cart/utilities").validateCartItems;

exports.handler = async (event) => {
  try {
    const inventory = await getProducts();
    const productJSON = JSON.parse(event.body);
    const line_items = validateCartItems(inventory, productJSON);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      currency: "eur",
      mode: "payment",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["SI"],
      },
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      line_items,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.log(error);
    /* Error handling */
  }
};
