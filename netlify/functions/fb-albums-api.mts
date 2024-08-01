import type { Context } from "@netlify/functions";

import { AlbumsDatum, Cursors, PhotosDatum } from "../../src/interface/albums";

export interface FbAlbumsApiResponse {
  albumId: AlbumsDatum["id"];
  nextPageCursorId: Cursors["after"];
  photos: PhotosDatum[];
}
export default async (req: Request, context: Context) => {
  return new Response("Hello, world!");
};
