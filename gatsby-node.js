
exports.createPages = async function ({
  actions,
  graphql,
}) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allContentfulLineup {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  // todo: type
  data.allContentfulLineup.edges.forEach((edge, idx) => {
    const {name, id, url} = edge.node
    const pageUrl = `/lineup/${url}`;

    console.log("creating page at : ", pageUrl);
    
    const page = {
      path: pageUrl,
      component: require.resolve(`./src/templates/LineupPage.tsx`),
      ownerNodeId: id,
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        id: id,
      },
    };

    createPage(page);
  });
};
