import React from "react";

type Props = { item: any };

const ShoppingCartItem = ({ item }: Props) => {
  const { image, name, quantity, formattedPrice } = item;
  return (
    <div className="list-group-item d-flex bg-secondary align-items-center">
      <img height={100} src={image} alt={name} />
      <span className="fs-4 flex-grow-1">
        {quantity}x {name}
      </span>
      <span className="ms-5 fs-4">{formattedPrice}</span>
      <button type="button" className="btn btn-close ms-1" aria-label="Close">
        <i className="bi bi-x fs-2"></i>
      </button>
    </div>
  );
};

export default ShoppingCartItem;
