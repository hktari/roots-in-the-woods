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
    <Link className="c-merch-item" to={`/merch/${id}`}>
      <div className="card text-bg-dark">
        <GatsbyImage image={image.gatsbyImageData} alt={image.filename} />
        <div className="card-img-overlay">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-title">{price} €</h3>
          <p className="card-text">{description.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default MerchItem;
