import React, { useState } from "react";
import getStripe from "../../utils/stripejs";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
};
const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
};

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
};

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

const ProductCard = ({ product }) => {
  const { redirectToCheckout } = useShoppingCart();
  const { name, images, description, currency } = product;
  const productPrice = product.prices[0];
  const formattedPrice = formatCurrencyString({
    value: productPrice.unit_amount,
    currency: productPrice.currency,
    language: "en-US",
  });

  async function buyNow() {}

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const payload = JSON.stringify({
      [product.id]: { ...product, quantity: 1 },
    });

    const response = await fetch(
      "/.netlify/functions/create-checkout-session",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        /* Error handling */
        console.warn("Error:", error);
      })
      .finally(() => setLoading(false));
    redirectToCheckout(response.sessionId);
  };

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <h4>{name}</h4>
          </legend>
          <label>Price: {formattedPrice} </label>
        </fieldset>
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          BUY ME
        </button>
      </form>
    </div>
  );
};

export default ProductCard;
