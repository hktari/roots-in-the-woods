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

  const onLoadMore = useCallback(async () => {
    if (!hasNextPage) return;

    const URL = `/.netlify/functions/fb-albums-api?cursor=${nextPageCursorId}&albumId=${albumId}`;
    try {
      const res = await fetch(URL);
      const { nextPageCursorId, photos: nextPagePhotos } =
        (await res.json()) as FbAlbumsApiResponse;

      setPhotos([...photos, ...nextPagePhotos]);
      setNextPageCursorId(nextPageCursorId);
    } catch (error) {
      console.error(error);
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
        <div ref={loadMoreRef} className="c-photo-album__load-more">
          <button className="btn btn-primary" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
