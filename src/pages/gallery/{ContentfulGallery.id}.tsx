import React, { useEffect } from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useHeaderContext } from "../../context/header-context";
import PhotoAlbum, {
  PhotoAlbumProps,
} from "../../components/gallery/PhotoAlbum";
import { AlbumsDatum } from "../../interface/albums";

type Props = {};

const getPhotoAlbumProps = (album: AlbumsDatum): PhotoAlbumProps => {
  if (!album.photos?.data) {
    console.warn("no photos found in album: " + album.id);
  }

  return {
    albumId: album.id,
    firstPagePhotos: album.photos?.data,
    secondPageCursorId: album.photos?.paging?.cursors?.after,
  };
};

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
  ) as AlbumsDatum | undefined;

  const lineupUrl = data.contentfulGallery?.lineup?.url;

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

          {lineupUrl && (
            <div className="mb-5">
              <Link
                to={`/lineup/${lineupUrl}`}
                className="btn btn-primary btn-lg text-white text-uppercase"
              >
                Lineup
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        {album ? (
          <PhotoAlbum {...getPhotoAlbumProps(album)}></PhotoAlbum>
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
            paging {
              next
              cursors {
                before
                after
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
      description
      eventDate
      eventDateEnd
      facebookAlbumId
      id
      title
      lineup {
        url
      }
    }
  }
`;
