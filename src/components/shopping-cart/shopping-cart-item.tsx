import React from "react";
import { useShoppingCart } from "use-shopping-cart";

type Props = { item: any };

const ShoppingCartItem = ({ item }: Props) => {
  const { id, image, name, quantity, formattedValue } = item;
  const { removeItem } = useShoppingCart();

  const onRemoveItem = () => removeItem(id);
  return (
    <div className="c-shopping-cart-item list-group-item d-flex align-items-center my-2">
      <img height={100} src={image} alt={name} />
      <span className="ms-3 fs-4 flex-grow-1">
        {quantity}x {name}
      </span>
      <span className="ms-5 fs-4">{formattedValue}</span>
      <button
        type="button"
        className="c-shopping-cart-item--remove btn btn-close ms-1"
        aria-label="Close"
        onClick={onRemoveItem}
      >
        <i className="bi bi-x fs-2"></i>
      </button>
    </div>
  );
};

export default ShoppingCartItem;
