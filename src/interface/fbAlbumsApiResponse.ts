import { AlbumsDatum, Cursors, PhotosDatum } from "./albums";

export default interface FbAlbumsApiResponse {
  albumId: AlbumsDatum["id"];
  nextPageCursorId?: Cursors["after"];
  photos: PhotosDatum[];
}
