import React from "react";

type Props = { item: any };

const ShoppingCartItem = ({ item }: Props) => {
  const { image, name, quantity, formattedPrice } = item;
  return (
    <div className="list-group-item d-flex bg-danger">
      <img height={100} src={image} alt={name} />
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{quantity}x {name}</h5>
      </div>
      <p className="mb-1">{formattedPrice}}</p>
      <small>And some small print.</small>
    </div>
  );
};

export default ShoppingCartItem;
