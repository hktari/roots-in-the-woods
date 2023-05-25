import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Roots in the Woods`,
    siteUrl: `https://rootsinthewoods.netlify.app`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": "5cz37cqc4ngx"
    }
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
      icon: 'src/images/logo.jpg',
    },
  },
  // {
  //   resolve: `gatsby-source-facebook-graphql`,
  //   options: {
  //     // Facebook account or page ID
  //     pageId: 'me/events',
  //     params: {
  //       fields: [
  //         'id',
  //         'name',
  //         'description',
  //         'cover',
  //         'attending_count',
  //         'start_time'
  //       ],
  //     },
  //     // Access Token from facebook
  //     accessToken: process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
  //   },
  // },
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass']
};

export default config;
