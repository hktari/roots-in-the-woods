import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type ActivityItemProps = {
  title: string;
  description: string;
  image: IGatsbyImageData;
};

const ActivityItem = ({ title, description, image }: ActivityItemProps) => {
  return (
    <div className="c-card">
      <GatsbyImage image={image} alt={title} />
    </div>
  );
};

export default ActivityItem;
