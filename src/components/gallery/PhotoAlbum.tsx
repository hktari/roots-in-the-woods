import { PageProps } from "gatsby";
import React from "react";
import { AlbumsDatum, PhotosDatum, WebpImage } from "../../interface/albums";

type Props = {
  album: AlbumsDatum;
};

const PhotoAlbum = ({ album }: Props) => {
  const MinPhotoWidth = 432;

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

  const hasNextPage = album?.photos?.paging?.next;

  return (
    <div className="col px-0 c-photo-album">
      {album.photos?.data?.map((photo: PhotosDatum) => {
        const largestPhoto = takeLargestPhoto(photo.webp_images);
        const optimalSizePhoto = takePhotoWithAtLeast(
          MinPhotoWidth,
          photo.webp_images
        );

        return (
          // TODO: extract to a separate component
          <div className="c-photo-album__img-container">
            <a href={largestPhoto.source}>
              <img src={optimalSizePhoto.source} alt={photo?.id} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoAlbum;
