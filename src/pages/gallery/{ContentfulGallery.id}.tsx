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
    facebookAlbumId,
    id,
  } = data.contentfulGallery;

  const album = data.albums.nodes[0]?.data?.find(
    (album) => album?.id === facebookAlbumId
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

  const formatDateString = (date: string) => {
    return new Date(date).toDateString();
  };

  return (
    <div className="container py-1">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="c-page__title mb-3"> {title} </h1>
          <h5 className="mb-4 mt-2">
            {formatDateString(eventDate)} - {formatDateString(eventDateEnd)}
          </h5>
          <p className="fs-4 mb-3">{description?.description}</p>

          <div className="mb-5">
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
          </div>
        </div>
      </div>
      <div className="row">
        {album ? (
          <PhotoAlbum album={album}></PhotoAlbum>
        ) : (
          <div>
            No facebook album found for id {facebookAlbumId}. Please check you
            have provided the correct id.
          </div>
        )}
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
      facebookAlbumId
      id
      title
    }
  }
`;
