import React, { useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useHeaderContext } from "../../context/header-context";
import PhotoAlbum from "../../components/gallery/PhotoAlbum";

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

  const albumId = "122093375228162302";

  const album = data.albums.nodes[0]?.data?.find(
    (album) => album?.id === albumId
  );

  const { isRelative: isLineupLinkRelative, link: lineupLink } = {
    isRelative: true,
    link: "/lineup/2023",
  };

  const { setOverrideBanner } = useHeaderContext();

  useEffect(() => {
    setOverrideBanner(
      bannerDesktop.gatsbyImageData,
      bannerMobile.gatsbyImageData
    );
  }, [
    bannerDesktop.gatsbyImageData,
    bannerMobile.gatsbyImageData,
    setOverrideBanner,
  ]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="c-page__title"> {title} </h1>

          {isLineupLinkRelative ? (
            <Link
              to={lineupLink}
              className="btn btn-primary btn-lg text-white text-uppercase"
            >
              Lineup
            </Link>
          ) : (
            <a
              href={lineupLink}
              className="btn btn-primary btn-lg text-white text-uppercase"
            >
              Lineup
            </a>
          )}
          <p className="my-2 my-md-4 fs-4">{description?.description}</p>
        </div>
      </div>
      <div className="row">
        <PhotoAlbum album={album}></PhotoAlbum>
      </div>
    </div>
  );
};

export default GalleryDetailPage;

export const query = graphql`
  query GalleryDetailPage($id: String) {
    albums: allFacebook {
      nodes {
        data {
          id
          name
          photos {
            data {
              id
              webp_images {
                source
                height
                width
              }
            }
          }
        }
      }
    }
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
