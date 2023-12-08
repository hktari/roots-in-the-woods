import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = {};

const GalleryDetailPage = ({
  data,
}: PageProps<Queries.GalleryDetailPageQuery>) => {
  const {
    title,
    description,
    banner,
    bannerMobile,
    eventDate,
    eventDateEnd,
    facebookAlbumUrl,
    id,
  } = data.contentfulGallery;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="c-page__title"> {title} </h1>
          <p className="my-2 my-md-4">{description?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetailPage;

export const query = graphql`
  query GalleryDetailPage($id: String) {
    contentfulGallery(id: { eq: $id }) {
      banner {
        gatsbyImageData
        title
      }
      bannerMobile {
        gatsbyImageData
        title
      }
      description {
        description
      }
      eventDate
      eventDateEnd
      facebookAlbumUrl
      id
      title
    }
  }
`;
