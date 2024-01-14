import * as React from "react";
import { graphql, PageProps } from "gatsby";

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query AllLineups {
//       allContentfulLineup {
//         edges {
//           node {
//             name
//             id
//           }
//         }
//       }
//     }
//   `);
//   data.allMarkdownRemark.edges.forEach((edge) => {
//     const slug = edge.node.fields.slug;
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/blog-post.js`),
//       context: { slug: slug },
//     });
//   });
// };

import type { GatsbyNode } from "gatsby";
import path from "path";

type Person = {
  id: number;
  name: string;
  age: number;
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createPage } = actions;

  const { data } = await graphql`
    query AllLineups {
      allContentfulLineup {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `;

  data.forEach((lineup: Queries.ContentfulLineup) => {
    const page = {
      path: `/lineup/${encodeURI(lineup.name!)}`,
      component: path.resolve(`./src/templates/LineupPage.tsx`),
      ownerNodeId: lineup.id,
      // The context is passed as props to the component as well
      // as into the component's GraphQL query.
      context: {
        id: lineup.id,
      },
    };

    createPage(page);
  });
};
