import React from "react";

import aboutImgTwo from "../../images/stereo-black-white.jpg";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";

import { Block, Inline, BLOCKS } from "@contentful/rich-text-types";

type Props = {};

const AboutSection = () => {
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

  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        node;
        // TODO: add images to contentful and test this
        const isEven = images.length % 2 === 0;
        const nextImage = images.shift();
        return (
          <div className="row mt-md-4 g-md-5">
            <div className="col-12 col-md-6 mt-3 ">
              <div className="c-section__text">{children}</div>
            </div>
            {nextImage && (
              <div
                className={`col-12 col-md-6 mt-3 px-0 ${
                  isEven ? "order-first" : ""
                }`}
              >
                <GatsbyImage
                  image={nextImage.gatsbyImageData}
                  alt={nextImage.description}
                />
              </div>
            )}
          </div>
        );
      },
    },
  };

  const paragraphs: React.ReactNode | null =
    text?.raw && documentToReactComponents(JSON.parse(text.raw), options);

  return (
    <section className="c-section">
      <div className="row">
        <div className="col-12 mt-3 mb-2 text-left text-md-center">
          <h2 className="c-section__title">{title}</h2>
        </div>
      </div>
      {paragraphs}
    </section>
  );
};

export default AboutSection;
