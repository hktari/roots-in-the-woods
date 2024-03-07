import React from "react";
import SocialList from "../../components/social-list";
import ContactForm from "../../components/contactForm";
import SEO from "../../components/seo";
import { navigate } from "gatsby";

type Props = {};

const OrderPage = (props: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/merch/order/success"))
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      <h1 className="c-page__title my-md-4 mb-4">Order Instructions</h1>
      <div className="mb-4">
        <ContactForm onSubmit={handleSubmit} />
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
