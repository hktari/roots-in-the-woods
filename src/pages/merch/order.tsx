import React from "react";
import SocialList from "../../components/social-list";
import ContactForm from "../../components/contactForm";

type Props = {};

const OrderPage = (props: Props) => {
  return (
    <div className="container">
      <h1 className="c-page__title my-md-4">Order Instructions</h1>
      <ContactForm />
      <SocialList />
    </div>
  );
};

export default OrderPage;
