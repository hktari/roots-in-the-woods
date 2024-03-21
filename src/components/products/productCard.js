import React, { useState, useRef } from "react";
import getStripe from "../../utils/stripejs";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const ProductCard = ({ product }) => {
  const { redirectToCheckout, addItem } = useShoppingCart();
  const { name, image, description, currency, price } = product;
  const formRef = useRef(null);
  const formattedPrice = formatCurrencyString({
    value: price,
    currency: currency,
    language: "en-US",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // formRef.current.reset();
    const quantity = new FormData(event.target).get("quantity");
    console.log("add item", quantity, event.target);
    event.target.reset();

    addItem(product, { count: quantity });
    // const payload = JSON.stringify({
    //   [product.id]: { ...product, quantity },
    // });

    // const response = await fetch(
    //   "/.netlify/functions/create-checkout-session",
    //   {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: payload,
    //   }
    // )
    //   .then((res) => res.json())
    //   .catch((error) => {
    //     /* Error handling */
    //     console.warn("Error:", error);
    //   })
    //   .finally(() => setLoading(false));
    // redirectToCheckout(response.sessionId);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6> {formattedPrice}</h6>
          <input
            name="quantity"
            class="form-control"
            type="number"
            placeholder="0"
            max={10}
            min={1}
            required
            aria-label="quantity"
          />

          <p className="card-text">{description}</p>
          <button className="btn btn-primary text-white">ADD TO CART</button>
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
