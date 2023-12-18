import { PageProps } from "gatsby";
import React from "react";

type Props = {};

const PhotoAlbum = ({
  album,
}: PageProps<Queries.GalleryDetailPageQuery>["data"]["albums"]["nodes"][0]['data'][0]) => {
  return (
    <div>
            {/* // TODO: select the right dimensions photo
    // TODO: place into layout
    // TODO: link to full size    */}

      {album.photos?.data?.map((photo) => (
        <img src={photo?.webp_images[0]?.source} alt={photo?.id} />
      ))}
    </div>
  );
};

export default PhotoAlbum;
