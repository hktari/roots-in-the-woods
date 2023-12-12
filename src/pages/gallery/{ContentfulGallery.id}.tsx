import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useHeaderContext } from "../../context/header-context";

type Props = {};

const GalleryDetailPage = ({
  data,
}: PageProps<Queries.GalleryDetailPageQuery>) => {
  const {
    title,
    description,
    bannerDesktop,
    bannerMobile,
    eventDate,
    eventDateEnd,
    facebookAlbumUrl,
    id,
  } = data.contentfulGallery;

  const { setOverrideBanner } = useHeaderContext();

  setOverrideBanner(bannerDesktop.gatsbyImageData, bannerMobile.gatsbyImageData);

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
      bannerDesktop: banner {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.6)
        title
      }
      bannerMobile {
        gatsbyImageData(height: 421)
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
