import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";

import { BLOCKS } from "@contentful/rich-text-types";

const IntroSectionRow = ({paragraph, nextImage, isEven }) => {
  return (
    <div className="row mt-md-4 g-md-5">
      <div className={`col-12 mt-3 ${nextImage ? "col-md-6" : ""}`}>
        <div className="c-section__text">
          {paragraph}
        </div>
      </div>
      {nextImage && (
        <div
          className={`col-12 col-md-6 mt-3 px-0 ${isEven ? "order-first" : ""}`}
        >
          <GatsbyImage
            image={nextImage.gatsbyImageData}
            alt={nextImage.description}
          />
        </div>
      )}
    </div>
  );
};

const IntroductionSection = () => {
  const { contentfulFrontPageIntroductionSection: introSection } =
    useStaticQuery(graphql`
      query {
        contentfulFrontPageIntroductionSection {
          images {
            gatsbyImageData(width: 776)
            description
          }
          title
          text {
            raw
          }
        }
      }
    `);

  if (!introSection) return null;

  const { title, images, text } = introSection;

  const Paragraphs: React.ReactNode | null =
    text?.raw && documentToReactComponents(JSON.parse(text.raw));

  const IntroSection =
    Paragraphs &&
    React.Children.map(Paragraphs, (node, index) => {
      const nextImage = images[index];
      const isEven = index % 2 === 0;
      if (React.isValidElement(node)) {
        return <IntroSectionRow
          nextImage={nextImage}
          isEven={isEven}
          paragraph={node}
        />;
      } else {
        return null;
      }
    });

  return (
    <section className="c-section">
      <div className="row">
        <div className="col-12 mt-3 mb-2 text-left text-md-center">
          <h2 className="c-section__title">{title}</h2>
        </div>
      </div>
      {IntroSection}
    </section>
  );
};

export default IntroductionSection;
