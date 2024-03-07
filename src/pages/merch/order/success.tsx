import React from "react";

type Props = {};

const Success = (props: Props) => {
  return (
    <div className="container">
      <h1 className="c-page__title my-md-4 mb-4">Order Successful</h1>

      <p className="fs-5">
        Thank you for placing an order for our awesome merchandise ! <br />
        We will get back to you as soon as we process the order.
      </p>
    </div>
  );
};

export default Success;
