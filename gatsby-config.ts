import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `roots-demo`,
    siteUrl: `https://www.yourdomain.tld`
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
      name: `Roots in the Woods demo`,
      short_name: `Sydney`,
      start_url: `/`,
      background_color: `#000000`,
      theme_color: `#ffffff`,
      display: `standalone`,
      icon: 'src/images/icon.png',
    },
  }, "gatsby-plugin-netlify",
    `gatsby-plugin-image`, 'gatsby-plugin-sharp']
};

export default config;
