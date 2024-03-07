import React from "react";
import SocialList from "../../components/social-list";
import ContactForm from "../../components/contactForm";
import SEO from "../../components/seo";

type Props = {};

const OrderPage = (props: Props) => {
  return (
    <div className="container">
      <h1 className="c-page__title my-md-4 mb-4">Order Instructions</h1>
      <div className="mb-4">
        <ContactForm />
      </div>
      <div className="row">
        <div className="col-md-8">
          <SocialList />
        </div>
      </div>
    </div>
  );
};

export const Head = () => <SEO />;

export default OrderPage;
