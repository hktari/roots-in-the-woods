import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { PageProps, graphql } from "gatsby";
import React from "react";

type Props = {};

const FAQPage = ({ data }: PageProps<Queries.FAQPageQuery>) => {
  const title = data?.contentfulFaq?.title;
  const faqText = data?.contentfulFaq?.faqText?.raw;

  const marginTop = "mt-3 mt-md-4";
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={marginTop}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={marginTop}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={marginTop}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={marginTop}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={marginTop}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={marginTop}>{children}</h6>
      ),
    },
  };

  const faqTextComponents =
    faqText && documentToReactComponents(JSON.parse(faqText), options);
  return (
    <div>
      <h1 className="c-page__title">{title}</h1>
      {faqTextComponents && (
        <div className="container">{faqTextComponents}</div>
      )}
    </div>
  );
};

export const query = graphql`
  query FAQPage {
    contentfulFaq {
      faqText {
        raw
      }
      title
    }
  }
`;

export default FAQPage;
