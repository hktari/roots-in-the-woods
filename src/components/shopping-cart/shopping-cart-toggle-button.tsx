import React from "react";
import { useShoppingCart } from "use-shopping-cart";

type Props = {
  isCollapsed: boolean;
  onToggleShoppingCart: VoidFunction;
};

const ShoppingCartToggleButton = ({
  onToggleShoppingCart,
  isCollapsed,
}: Props) => {
  const { cartCount } = useShoppingCart();

  return (
    <div
      className={`c-shopping-cart-toggle-button ${
        isCollapsed ? "c-shopping-cart-toggle-button--collapsed" : ""
      }`}
    >
      <button
        className="btn bg-dark rounded-circle"
        onClick={onToggleShoppingCart}
      >
        <i className="bi bi-cart4 text-white fs-1"></i>
      </button>
      <div className="c-shopping-cart-toggle-button--counter-bg rounded-circle ">
        <span className="c-shopping-cart-toggle-button--counter badge text-bg-primary text-white">
          {cartCount}
        </span>
      </div>
    </div>
  );
};

export default ShoppingCartToggleButton;
