import React, { useCallback, useState } from "react";
import { PhotosDatum } from "../../interface/albums";
import PhotoAlbumItem from "./photoAlbumItem";
import FbAlbumsApiResponse from "../../interface/fbAlbumsApiResponse";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useInView } from "react-cool-inview";

export type PhotoAlbumProps = {
  albumId: string;
  firstPagePhotos: PhotosDatum[];
  secondPageCursorId: string | undefined;
};

const PhotoAlbum = ({
  albumId,
  firstPagePhotos,
  secondPageCursorId,
}: PhotoAlbumProps) => {
  const [photos, setPhotos] = useState([...firstPagePhotos]);

  const [nextPageCursorId, setNextPageCursorId] = useState(secondPageCursorId);

  const hasNextPage = !!nextPageCursorId;

  const [isLoading, setIsLoading] = useState(false);

  const onLoadMore = useCallback(async () => {
    if (!hasNextPage) return;

    setIsLoading(true);
    const URL = `/.netlify/functions/fb-albums-api?cursor=${nextPageCursorId}&albumId=${albumId}`;
    try {
      const res = await fetch(URL);
      const { nextPageCursorId, photos: nextPagePhotos } =
        (await res.json()) as FbAlbumsApiResponse;

      setPhotos([...photos, ...nextPagePhotos]);
      setNextPageCursorId(nextPageCursorId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [albumId, hasNextPage, nextPageCursorId, photos]);

  const { observe: loadMoreRef } = useInView({
    onEnter: async () => {
      await onLoadMore();
    },
  });

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {photos.map((photo: PhotosDatum) => (
            <PhotoAlbumItem key={photo.id} photo={photo} minPhotoWidth={432} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {hasNextPage && (
        <div ref={loadMoreRef} className="c-photo-album__load-more text-center">
          <button
            disabled={isLoading}
            className="btn btn-primary text-white"
            onClick={onLoadMore}
          >
            {isLoading ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <>Load More</>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
