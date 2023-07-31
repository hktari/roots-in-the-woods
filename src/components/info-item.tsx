import React from "react";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

type InfoItemProps = {
  title: string;
  description: string;
  image: IGatsbyImageData;
};

const InfoItem = ({ title, description, image }: InfoItemProps) => {
  return (
    <div className="card rounded-0">
      <GatsbyImage
        className="card-img-top img-fluid"
        image={image}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text fs-5">{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
