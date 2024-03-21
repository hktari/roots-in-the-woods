const { mapToProduct } = require("./src/util/products");

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allContentfulLineup {
        edges {
          node {
            name
            id
            url
          }
        }
      }
    }
  `);

  // todo: type
  data.allContentfulLineup.edges.forEach((edge, idx) => {
    const { name, id, url } = edge.node;
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

  // create stripe product detail pages
  const { data: stripeProductData } = await graphql(`
    query ProductPrices {
      prices: allStripePrice(
        filter: { active: { eq: true } }
        sort: { fields: [unit_amount] }
      ) {
        edges {
          node {
            id
            active
            currency
            unit_amount
            product {
              id
              name
              images
            }
          }
        }
      }
    }
  `);

  stripeProductData.prices.edges.forEach((edge) => {
    const product = mapToProduct(edge.node);
    const pageUrl = `/merch/${product.id}`;

    console.log("creating page at : ", pageUrl);

    const page = {
      path: pageUrl,
      component: require.resolve(`./src/templates/StripeProductPage.tsx`),
      ownerNodeId: product.id,
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        product,
      },
    };
    createPage(page);
  });
};
