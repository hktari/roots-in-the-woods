import type { Context } from "@netlify/functions";

import FbAlbumsApiResponse from "../../src/interface/fbAlbumsApiResponse";

export default async (req: Request, context: Context) => {
  return new Response("Hello, world!");
};
