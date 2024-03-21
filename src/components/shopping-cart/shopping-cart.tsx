import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import ShoppingCartItem from "./shopping-cart-item";

type Props = {};

const ShoppingCart = (props: Props) => {
  const { cartDetails, redirectToCheckout } = useShoppingCart();

  const [isLoading, setIsLoading] = useState(false);

  const onCheckout = async () => {
    const payload = JSON.stringify(cartDetails);

    setIsLoading(true);
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
        alert(`Error: ${error}`);
      })
      .finally(() => setIsLoading(false));
    redirectToCheckout(response.sessionId);
  };

  return (
    <div className="c-shopping-cart list-group">
      {Object.keys(cartDetails).map((itemId) => (
        <ShoppingCartItem item={cartDetails[itemId]} />
      ))}

      <div className="text-center mt-2">
        <button
          disabled={isLoading}
          className="btn btn-primary btn-lg text-white"
          onClick={onCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
