import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import ShoppingCartItem from "./shopping-cart-item";
import ShoppingCartToggleButton from "./shopping-cart-toggle-button";

type Props = {};

const ShoppingCart = (props: Props) => {
  const {
    cartDetails,
    cartCount,
    redirectToCheckout,
    shouldDisplayCart,
    handleCartClick,
    formattedTotalPrice,
  } = useShoppingCart();

  const [isLoading, setIsLoading] = useState(false);
  const isEmpty = cartCount === 0;

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const payload = JSON.stringify(cartDetails);
      const response = await fetch(
        "/.netlify/functions/create-checkout-session",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: payload,
        }
      ).then((res) => res.json());

      try {
        await redirectToCheckout(response.sessionId);
      } catch (error) {
        console.error(error);
        alert(
          "A redirection error occured during communication with Stripe. Please try again at a later time or else report this to the site administrator."
        );
      }
    } catch (error) {
      console.error(error);
      alert(
        "An unknown error occured. Please report this to the site administrator."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onToggleShoppingCart = () => {
    handleCartClick();
  };

  return (
    <>
      <div
        className={`c-shopping-cart ${
          !shouldDisplayCart ? "c-shopping-cart--collapsed" : ""
        }`}
        hidden={isEmpty}
      >
        <div className="c-shopping-cart--header">
          <button
            className="c-shopping-cart--close btn"
            onClick={onToggleShoppingCart}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="c-shopping-cart--container ">
          <div className="c-shopping-cart--list">
            <div className="">
              {Object.keys(cartDetails).map((itemId) => (
                <ShoppingCartItem item={cartDetails[itemId]} />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <hr />
          </div>
          <div className="c-shopping-cart--total text-end me-3   fs-4">
            <span className="">Total: </span>
            <span className="">{formattedTotalPrice}</span>
          </div>

          <div className="c-shopping-cart--checkout-btn mt-4">
            <button
              disabled={isLoading}
              className="btn btn-primary text-white btn-md-lg"
              onClick={onCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <ShoppingCartToggleButton />
    </>
  );
};

export default ShoppingCart;
