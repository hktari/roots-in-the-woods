import type { Context } from "@netlify/functions";

import FbAlbumsApiResponse from "../../src/interface/fbAlbumsApiResponse";
import { Photos } from "../../src/interface/albums";

function urlToURLSearchParams(url: string) {
  return new URLSearchParams(url.split("?")[1]);
}

export default async (req: Request, context: Context) => {
  const queryParams = urlToURLSearchParams(req.url);

  const cursor = queryParams.get("cursor");
  const albumId = queryParams.get("albumId");

  if (!cursor || !albumId) {
    return new Response("cursor and albumId are required", { status: 400 });
  }

  const limit = 10;
  const accessToken = Netlify.env.get("FACEBOOK_GRAPH_TOKEN");
  const url = `https://graph.facebook.com/v15.0/${albumId}/photos?access_token=${accessToken}&fields=webp_images&limit=${limit}&after=${cursor}`;

  const response = await fetch(url);
  const data = await response.json();

  if (response.status !== 200) {
    return new Response(
      JSON.stringify({ error: data, message: "Failed to fetch data" }),
      { status: 500 }
    );
  }

  const photos = data as Photos;
  const responseBody: FbAlbumsApiResponse = {
    albumId,
    nextPageCursorId: photos.paging?.cursors?.after,
    photos: photos.data || [],
  };

  return new Response(JSON.stringify(responseBody));
};
