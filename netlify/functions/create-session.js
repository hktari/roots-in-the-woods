
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const validateCartItems = require('use-shopping-cart/utilities')
  .validateCartItems
const inventory = require('./data/products.json')

exports.handler = async (event) => {
  try {
    const productJSON = JSON.parse(event.body)
    const line_items = validateCartItems(inventory, productJSON)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['EU']
      },
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      line_items
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id })
    }
  } catch (error) {/* Error handling */}
}

