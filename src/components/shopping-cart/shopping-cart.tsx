import React from "react";
import { useShoppingCart } from "use-shopping-cart";

type Props = {};

const ShoppingCartItem = ({ item }) => {
  return <div>{JSON.stringify(item, undefined, 4)}</div>;
};

const ShoppingCart = (props: Props) => {
  const { cartDetails } = useShoppingCart();

  return (
    <div>
      {Object.keys(cartDetails).map((itemId) => (
        <ShoppingCartItem item={cartDetails[itemId]} />
      ))}
    </div>
  );
};

export default ShoppingCart;
