import React from "react";

type Props = {};

const OrderPage = (props: Props) => {
  return (
    <div className="container">
      <h1 className="c-page__title my-md-4">Order Instructions</h1>
      <p className="fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias autem nam nihil odio sequi labore libero quod illo praesentium tempora mollitia omnis quia debitis harum repellat, suscipit optio numquam illum!</p>
      <ol>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, totam!</li>
        <li>Voluptatum quidem commodi nobis, fuga voluptas molestiae aliquam eveniet quam?</li>
        <li>Nam aspernatur praesentium quisquam iure sapiente recusandae delectus quam consectetur!</li>
        <li>Animi harum tenetur amet voluptatem totam, consectetur dolorum. Natus, porro.</li>
      </ol>
    </div>
  );
};

export default OrderPage;
