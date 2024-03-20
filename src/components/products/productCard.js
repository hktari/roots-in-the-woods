import React, { useState } from "react";
import getStripe from "../../utils/stripejs";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const ProductCard = ({ product }) => {
  const { redirectToCheckout } = useShoppingCart();
  const { name, image, description, currency, price } = product;
  const formattedPrice = formatCurrencyString({
    value: price,
    currency: currency,
    language: "en-US",
  });

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
    <form onSubmit={handleSubmit}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6> {formattedPrice}</h6>
          <input
            name="amount"
            class="form-control"
            type="number"
            placeholder="0"
            max={10}
            min={1}
            required
            aria-label="amount"
          />

          <p className="card-text">{description}</p>
          <button disabled={loading} href="#" className="btn btn-primary">
            BUY
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
