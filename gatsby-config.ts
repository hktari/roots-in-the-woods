import type { GatsbyConfig } from "gatsby";

console.log("STAGING: ", process.env.STAGING);

if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Roots in the Woods`,
    siteUrl: `https://rootsinthewoods.netlify.app`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "5cz37cqc4ngx",
        environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roots in the Woods`,
        short_name: `Roots in the Woods`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: "src/images/logo.jpg",
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/artists`,
        name: `artists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/info-items`,
        name: `info-items`,
      },
    },
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        // Facebook account or page ID
        pageId: "101836354515324/albums",
        params: {
          fields: ["id", "name", "photos{webp_images}"],
        },
        // Access Token from facebook
        accessToken: process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `contentful-schema.gql`,
        include: {
          plugins: [`gatsby-source-contentful`, `gatsby-source-facebook-graphql`],
        },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `rootsinthewoodsfestival.com`,
      },
    },
  ],
};

export default config;
