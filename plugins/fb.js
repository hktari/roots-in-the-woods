const graph = require("fbgraph");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions;

  reporter.info(`Fetching data from Facebook...`);

  const pluginConfig = {
    // Facebook account or page ID
    pageId: "101836354515324/albums",
    params: {
      fields: ["id", "name", "photos{webp_images}"],
    },
    // Access Token from facebook
    accessToken: process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
  };

  const { pageId, params, accessToken } = pluginConfig;

  // Set current access token
  graph.setAccessToken(accessToken);
  graph.setVersion("15.0");

  const options = {
    timeout: 10000,
  };

  // Facebook graphql data fetch
  const getData = async (from, params = undefined) => {
    return await new Promise((resolve, reject) => {
      graph.setOptions(options).get(from, params, (err, res) => {
        if (err) {
          const originalErrOrMsg = err.exception || new Error(err.message);
          return reject(originalErrOrMsg);
        }
        if (!res) {
          return reject(new Error("Response is empty!"));
        }

        reporter.info(`got ${res?.data?.length} albums`);
        resolve(res);
      });
    });
  };

  // Format params for fbgraph
  const formatParams = ({ fields }) => {
    let string = "";
    fields.map((item, i) =>
      i < fields.length - 1 ? (string += `${item},`) : (string += item)
    );
    return { fields: string };
  };

  const nodeData = await getData(pageId.toString(), formatParams(params));

  // TODO: for each album, fetch photos until next page is null

  console.log(JSON.stringify(nodeData, null, 2));
  const hasNextPage = (data) => data.paging && data.paging.next;

  let paginationId = 1;
  let images = [];
  // TODO: nodeData is an array of albums, each album has an array of photos, id, name and paging
  let next = hasNextPage(nodeData);
  while (next) {
    paginationId++;
    reporter.info(`fetching page ${paginationId}`);
    const nextPageData = await getData(next);
    images = images.concat(nextPageData.data);
    next = hasNextPage(nextPageData);
  }

  const sourceNodes = {
    id: createNodeId("facebook"),
    parent: null,
    children: [],
    ...images,
    internal: {
      type: `facebook`,
      content: JSON.stringify(images),
      contentDigest: createContentDigest(images),
    },
  };

  return createNode(sourceNodes);
};
