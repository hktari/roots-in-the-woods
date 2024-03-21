import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import ShoppingCartItem from "./shopping-cart-item";

type Props = {};

const ShoppingCart = (props: Props) => {
  const { cartDetails } = useShoppingCart();

  return (
    <div className="c-shopping-cart list-group">
      {Object.keys(cartDetails).map((itemId) => (
        <ShoppingCartItem item={cartDetails[itemId]} />
      ))}
    </div>
  );
};

export default ShoppingCart;
