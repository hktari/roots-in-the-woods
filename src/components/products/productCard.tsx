import React, { useState, useRef } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { Link } from "gatsby";

import StripeProduct from "../../interface/stripe/product";

const ProductCard = ({ product }: { product: StripeProduct }) => {
  const { currency, price } = product;
  const formattedPrice = formatCurrencyString({
    value: price,
    currency: currency,
    language: "en-US",
  });

  return (
    <Link
      className="c-product-card text-decoration-none"
      to={`/merch/${product.id}`}
    >
      <div className="card border-0">
        <div className="card-body p-0">
          <div className="d-md-none mb-2">
            <h2 className="card-title text-decoration-underline fw-bold">
              {product.name}
            </h2>
            <h4 className="card-subtitle fs-2">{formattedPrice} €</h4>
          </div>
          {/* TODO: gatsby image data */}
          <img className="c-product-card--img" src={product.image} width={460} alt={product.name} />
          <div className="c-product-card__overlay card-img-overlay  d-none d-md-block text-white">
            <h2 className=" card-title">{product.name}</h2>
            <h3 className="card-title">{formattedPrice}</h3>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
