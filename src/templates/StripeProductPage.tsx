import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  DebugCart,
  formatCurrencyString,
  useShoppingCart,
} from "use-shopping-cart";
import StripeProduct from "../interface/stripe/product";
import ShoppingCart from "../components/shopping-cart/shopping-cart";

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
    await navigate(-1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="fw-bold"> {product?.name} </h2>
              <h4 className=" fs-2">{formattedPrice} €</h4>
              <p className="my-2 my-md-4">{product?.description}</p>

              <div className="input-group input-group-md">
                <input
                  name="quantity"
                  className="form-control"
                  style={{ maxWidth: "75px" }}
                  type="number"
                  placeholder="0"
                  max={10}
                  min={1}
                  required
                  aria-label="quantity"
                />
                <button className="btn btn-primary text-white d-inline ms-2">
                  ADD TO CART
                </button>{" "}
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
      <DebugCart />
      <ShoppingCart />
    </>
  );
};

export default StripeProductPage;
