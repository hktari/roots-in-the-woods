import React from "react";
import SocialList from "../../../components/social-list";

type Props = {};

const Success = (props: Props) => {
  return (
    <div className="container">
      <h1 className="c-page__title my-md-4 mb-4">Order Successful</h1>

      <p className="fs-5">
        <span className="fs-3">
          Thank you for ordering our awesome merchandise !
        </span>
        <br />
        <br />
        We will get back to you as soon as we process the order. Feel free to
        reach out to us should you have any questions.
      </p>

      <div className="mt-5">
        <SocialList />
      </div>
    </div>
  );
};

export default Success;
