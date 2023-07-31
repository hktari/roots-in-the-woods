import React from "react";

type InfoSectionProps = {
  items: PageProps<Queries.IndexPageQuery>["data"]["infoItems"];
  images: PageProps<Queries.IndexPageQuery>["data"]["infoItemImages"];
};

import InfoItem from "../info-item";
import { PageProps, graphql } from "gatsby";

const InfoSection = ({ items, images }: InfoSectionProps) => {
  return (
    <section className="c-section">
      <h2 className="c-section__title"></h2>

      <div className="c-floating-layout clearfix">
        {items.edges.map((edge) => {
          const image = images.nodes.find(
            (imageNode) =>
              imageNode.childImageSharp?.fixed?.originalName ===
              edge.node.imageName
          );

          return (
            <div key={edge.node.id} className="c-floating-layout__item">
              <InfoItem
                title={edge.node.title!}
                description={edge.node.description!}
                image={image?.childImageSharp?.gatsbyImageData!}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoSection;
