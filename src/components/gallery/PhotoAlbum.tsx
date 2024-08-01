import { PageProps } from "gatsby";
import React from "react";
import { AlbumsDatum, PhotosDatum, WebpImage } from "../../interface/albums";
import PhotoAlbumItem from "./photoAlbumItem";

type Props = {
  album: AlbumsDatum;
};

const PhotoAlbum = ({ album }: Props) => {
  const hasNextPage = album?.photos?.paging?.next;

  return (
    <div className="col px-0 c-photo-album">
      {album.photos?.data?.map((photo: PhotosDatum) => <PhotoAlbumItem key={photo.id} photo={photo} minPhotoWidth={432} />)}
    </div>
  );
};

export default PhotoAlbum;
