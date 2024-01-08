import React from "react";

type Props = {};

const OrderPage = (props: Props) => {
  return (
    <div className="container">
      <h1 className="c-page__title my-md-4">Order Instructions</h1>
      <p className="fs-4">Please contact the following mobile number to make an order <a href="tel:+38651246140">+38651246140</a></p>
    </div>
  );
};

export default OrderPage;
