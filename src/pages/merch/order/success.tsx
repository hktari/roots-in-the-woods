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
        Expect an email containing additional information regarding the delivery of your Roots in the Woods merch ! 
        Feel free to reach out to us should you have any questions.
      </p>

      <div className="mt-5">
        <SocialList />
      </div>
    </div>
  );
};

export default Success;
