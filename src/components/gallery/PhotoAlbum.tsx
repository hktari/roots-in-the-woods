import { PageProps } from "gatsby";
import React from "react";

type Props = {};

type Photo = {
  source: string;
  height: number;
  width: number;
};

const PhotoAlbum = ({
  album,
}: PageProps<Queries.GalleryDetailPageQuery>["data"]["albums"]["nodes"][0]["data"][0]) => {
  const MinPhotoWidth = 432;

  const sortByWidthAscending = (photos: Photo[]) => {
    const copy = [...photos];
    return copy.sort((a, b) => a.width - b.width);
  };

  const takePhotoWithAtLeast = (minWidth: number, photos: Photo[]) => {
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

  return (
    <div className="c-photo-album">
      {/* // TODO: select the right dimensions photo
    // TODO: place into layout
    // TODO: link to full size    */}

      {album.photos?.data?.map((photo) => (
        <div className="c-photo-album__img-container">
          <a href={photo?.webp_images[0]?.source}>
            <img src={photo?.webp_images[0]?.source} alt={photo?.id} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PhotoAlbum;
