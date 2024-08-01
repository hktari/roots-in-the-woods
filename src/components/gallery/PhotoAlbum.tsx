import { PageProps } from "gatsby";
import React, { useState } from "react";
import { AlbumsDatum, PhotosDatum, WebpImage } from "../../interface/albums";
import PhotoAlbumItem from "./photoAlbumItem";

type Props = {
  album: AlbumsDatum;
};

const PhotoAlbum = ({ album }: Props) => {
  const curPage = album.photos;
  const [photos, setPhotos] = useState([...curPage?.data]);

  const [nextPageUrl, setNextPageUrl] = useState(curPage?.paging?.next);

  const hasNextPage = !!nextPageUrl;

  const onLoadMore = async () => {
    if (!hasNextPage) return;

    try {
      const res = await fetch(nextPageUrl);
      const nextPagePhotos = (await res.json()).data;
      setPhotos([...photos, ...nextPagePhotos]);
      setNextPageUrl(nextPagePhotos?.paging?.next);
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
