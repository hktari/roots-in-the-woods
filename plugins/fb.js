const graph = require("fbgraph");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions;

  reporter.info(`Fetching albums from Facebook...`);

  const pluginConfig = {
    // Facebook account or page ID
    pageId: "101836354515324/albums",
    params: {
      fields: ["id", "name", "photos{webp_images}"],
    },
    // Access Token from facebook
    accessToken: process.env.FACEBOOK_GRAPH_TOKEN,
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

  let nodeData = await getData(pageId.toString(), formatParams(params));
  const getNextPageUrl = (data) => data.paging && data.paging.next;

  let paginationId = 1;
  let albums = [...nodeData.data];
  let nextPageUrl = getNextPageUrl(nodeData);
  while (nextPageUrl) {
    paginationId++;
    reporter.info(`fetching page ${paginationId}`);
    nodeData = await getData(nextPageUrl);
    albums = albums.concat(nodeData.data);
    nextPageUrl = getNextPageUrl(nodeData);
  }

  const sourceNodes = {
    id: createNodeId("facebook"),
    parent: null,
    children: [],
    ...nodeData,
    internal: {
      type: `facebook`,
      content: JSON.stringify(albums),
      contentDigest: createContentDigest(albums),
    },
  };

  return createNode(sourceNodes);
};
