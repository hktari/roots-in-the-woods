import React from "react";
import { PhotosDatum, WebpImage } from "../../../interface/albums";

type Props = {
  photo: PhotosDatum;
  minPhotoWidth: number;
};

const PhotoAlbumItem = ({ photo, minPhotoWidth }: Props) => {
  const sortByWidthAscending = (photos: WebpImage[]) => {
    const copy = [...photos];
    return copy.sort((a, b) => a.width - b.width);
  };

  const takePhotoWithAtLeast = (minWidth: number, photos: WebpImage[]) => {
    if (photos.length === 0) {
      throw new Error("photos length is zero");
    }

    const sortedPhotos = sortByWidthAscending(photos);
    for (let i = 0; i < sortedPhotos.length; i++) {
      if (sortedPhotos[i].width >= minWidth) {
        return sortedPhotos[i];
      }
    }
    return sortedPhotos[sortedPhotos.length - 1];
  };

  const takeLargestPhoto = (photos: WebpImage[]) => {
    const sortedPhotos = sortByWidthAscending(photos);
    return sortedPhotos[sortedPhotos.length - 1];
  };

  const largestPhoto = takeLargestPhoto(photo.webp_images);
  const optimalSizePhoto = takePhotoWithAtLeast(
    minPhotoWidth,
    photo.webp_images
  );

  return (
    <div className="m-1 rounded-1 " style={{ overflow: "hidden" }}>
      <a href={largestPhoto.source}>
        <img
          className="img-fluid"
          src={optimalSizePhoto.source}
          alt={photo?.id}
        />
      </a>
    </div>
  );
};

export default PhotoAlbumItem;
