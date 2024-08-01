import { PageProps } from "gatsby";
import React, { useState } from "react";
import { AlbumsDatum, PhotosDatum, WebpImage } from "../../interface/albums";
import PhotoAlbumItem from "./photoAlbumItem";
import FbAlbumsApiResponse from "../../interface/fbAlbumsApiResponse";
type Props = {
  albumId: string;
  firstPagePhotos: PhotosDatum[];
  secondPageCursorId: string | null;
};

const PhotoAlbum = ({
  albumId,
  firstPagePhotos,
  secondPageCursorId,
}: Props) => {
  const [photos, setPhotos] = useState([...firstPagePhotos]);

  const [nextPageCursorId, setNextPageCursorId] = useState(secondPageCursorId);

  const hasNextPage = !!nextPageCursorId;

  const onLoadMore = async () => {
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
  };

  return (
    <div className="col px-0 c-photo-album">
      {photos.map((photo: PhotosDatum) => (
        <PhotoAlbumItem key={photo.id} photo={photo} minPhotoWidth={432} />
      ))}

      {hasNextPage && (
        <div className="c-photo-album__load-more">
          <button className="btn btn-primary" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
