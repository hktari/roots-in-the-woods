import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type Props = {};

const MerchItem = ({
  id,
  title,
  description,
  price,
  image,
}: ContentfulMerch) => {
  return (
    <Link className="c-merch-item text-decoration-none" to={`/merch/${id}`}>
      <div className="card border-0">
        <div className="card-body p-0">
          <div className="d-md-none mb-2">
            <h2 className="card-title text-decoration-underline fw-bold">{title}</h2>
            <h4 className="card-subtitle fs-2">{price} €</h4>
          </div>
          <GatsbyImage image={image.gatsbyImageData} alt={image.filename} />
          <div className="c-merch-item__overlay card-img-overlay  d-none d-md-block text-white">
            <h2 className=" card-title">{title}</h2>
            <h3 className="card-title">{price} €</h3>
            <p className="card-text">{description?.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MerchItem;
