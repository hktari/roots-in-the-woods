import { PageProps } from "gatsby";
import React from "react";

type Props = {};

type Photo = {
  id: string;
  webp_images: PhotoSource[];
};

type PhotoSource = {
  source: string;
  height: number;
  width: number;
};

const PhotoAlbum = ({
  album,
}: PageProps<Queries.GalleryDetailPageQuery>["data"]["albums"]["nodes"][0]["data"][0]) => {
  const MinPhotoWidth = 432;

  const sortByWidthAscending = (photos: PhotoSource[]) => {
    const copy = [...photos];
    return copy.sort((a, b) => a.width - b.width);
  };

  const takePhotoWithAtLeast = (minWidth: number, photos: PhotoSource[]) => {
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

  const takeLargestPhoto = (photos: PhotoSource[]) => {
    const sortedPhotos = sortByWidthAscending(photos);
    return sortedPhotos[sortedPhotos.length - 1];
  };

  return (
    <div className="c-photo-album">

      {album.photos?.data?.map((photo: Photo) => {
        const largestPhoto = takeLargestPhoto(photo.webp_images);
        const optimalSizePhoto = takePhotoWithAtLeast(
          MinPhotoWidth,
          photo.webp_images
        );

        return (
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
