import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import StripeProduct from "../interface/stripe/product";

type Props = {
  pageContext: { product: StripeProduct };
};

const StripeProductPage = ({ pageContext }: Props) => {
  const { product } = pageContext;

  const { addItem } = useShoppingCart();

  const formattedPrice = formatCurrencyString({
    value: product.price,
    currency: product.currency,
    language: "en-US",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quantity = new FormData(event.target).get("quantity");
    console.log("add item", quantity, event.target);
    event.target.reset();
    addItem(product, { count: Number(quantity) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="fw-bold"> {product?.name} </h2>
            <h4 className=" fs-2">{formattedPrice} €</h4>
            <p className="my-2 my-md-4">{product?.description}</p>

            <div>
              <button className="btn btn-primary btn-md text-white d-inline">
                ADD TO CART
              </button>{" "}
              <input
                name="quantity"
                className="form-control ms-2"
                style={{ maxWidth: "75px" }}
                type="number"
                placeholder="0"
                max={10}
                min={1}
                required
                aria-label="quantity"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="my-2 my-md-0">
              <img width={460} src={product?.image} alt={product?.name} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StripeProductPage;
